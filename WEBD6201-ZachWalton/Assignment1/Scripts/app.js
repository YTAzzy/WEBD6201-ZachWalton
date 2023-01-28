// get current file name
const fileName = location.href.split("/").slice(-1)[0];

// -------------------------------------------------------- DATE ------------------------------------------------//

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}/${month}/${year}`

// -------------------------------------------------------- VARIABLES ------------------------------------------------//

// content variables
const navBrandName = 'WEBD-6201 Assignment 1 - Mudassar Azeem and Zach Walton';
const homeText = 'This is the Assignment 1 Homepage, created by Mudassar Azeem and Zachary Walton';
const aboutText = 'This is the first page you\'ll see when you come to our website!';
const footerText = 'All Rights are Reserved By Durham College ';
const homeTitle = 'Welcome!';
const Projects = [
  {
    img: 'https://assets1.ignimgs.com/2018/01/23/celeste---button-1516746065043.jpg',
    text: 'We worked together on massive hit indie game \'Celeste\' during it\'s development before 2018'
  },
  {
    img: 'https://cdn.gobankingrates.com/wp-content/uploads/2020/04/TD-Bank-shutterstock_1091238983.jpg',
    text: 'We were instrumental in helping TD bank switch to a more effective online system, and continue to help them to this day'
  },
  {
    img: 'https://image.cnbcfm.com/api/v1/image/105432157-1536095646923gettyimages-524309146.jpeg?v=1595449620',
    text: 'Finally, we were instrumental in the creation of a small company known as \'Google\''
  }
]
const Services = [
  {
    img: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_Cybersecurity_Projects.jpg',
    text: 'Cyber Security'
  },
  {
    img: 'https://ares.decipherzone.com/blog-manager/uploads/banner_webp_14f4ae2e-7083-4e84-8687-aa2e511a6a68.webp',
    text: 'Web Application Development'
  },
  {
    img: 'https://www.businessofapps.com/wp-content/uploads/2020/08/zymr8_steps_the_mobile_app_dev_lifecycle_cover.jpg',
    text: 'Mobile Application Development'
  }
]
const Developers = [
  {
    img: 'https://digileaders.com/wp-content/uploads/2018/07/studio-republic-644339-unsplash-e1532597303731.jpg',
    text: 'Mudassar Azeem'
  },
  {
    img: 'https://images.unsplash.com/photo-1603575449096-da705f622102?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwdXNpbmclMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    text: 'Zachary Walton'
  },

]
const ContactFields = [
  {
    id: "name",
    label: "Name",
    type: "text"
  },
  {
    id: "number",
    label: "Contact Number",
    type: "text"
  },
  {
    id: "email",
    label: "Email address",
    type: "email"
  },
  {
    id: "password",
    label: "Password",
    type: "password"
  }
]
const navItems  = [
  {
    name: "Home",
    icon: "home",
    link: "index.html",
  },
  {
    name: "Projects",
    icon: "th",
    link: "products.html",
  },
  {
    name: "Services",
    icon: "bell",
    link: "services.html",
  },
  {
    name: "About Us",
    icon: "info-circle",
    link: "about.html"
  },
  {
    name: "Human Resources",
    icon: "group",
    link: "human_resources.html"
  },
  {
    name: "Contact Us",
    icon: "phone",
    link: 'contact.html'
  }
];

// -------------------------------------------------------- FUNCTIONS ------------------------------------------------//
//  TO CREATE NAVBAR
const createNavbar = () => {

  // creating unordered list
  let nav = $('<ul></ul>')

  // loop through items to create list items and append in list
  for (const navItem of navItems) {
    let li = $('<i></i>').attr('class', 'fa fa-'+ navItem.icon +' text-white')
    let content = 'nav-link '

    content +=  navItem.link === fileName ? 'active' : (fileName === '' && navItem.link === 'index.html' ? 'active' : '')
    li = $('<a></a>').attr('class', content).attr('href',  navItem.link).text(' ' + navItem.name).prepend(li)
    li = $('<li></li> ').attr('class', 'nav-item').append(li)
    nav.append(li)
  }

  nav.attr('class' , 'navbar-nav')
  nav = $('<div></div>').attr('class' , 'collapse navbar-collapse justify-content-end').attr('id' , 'navbarNav').append(nav)

  // creating toggler btn
  let toggler = $('<span></span>').attr('class', 'navbar-toggler-icon')
  toggler = $('<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>').append(toggler)

  // create navbar container
  let navbar = $('<div></div>').attr('class', 'container-fluid')

  // appending brand / toggler button / nav items
  navbar.append('<a class="navbar-brand" href="index.html">'+ navBrandName +'</a>', toggler, nav[0])

  // appending container in nav tag and returning
  return  $('<nav></nav>').attr('class' , 'navbar navbar-expand-lg navbar-dark bg-dark' ).append(navbar)[0]
}

// CREATE 404 PAGE
const createPageWithText = (text) => {
  let page404 = $("<div class='min-vh-100 w-100 d-flex align-items-center justify-content-center'></div>")
  page404.append($("<h2></h2>").text (text))
  return page404[0]
}

const createCardSection = (obj, hasAbout, heading) => {
  let parent = $("<div></div>").attr('class', 'row justify-content-center')
  let headingTag = $('<div></div>').attr('class', 'about').append($('<h2></h2>').text(heading))
  if (hasAbout) {
    headingTag.append( $('<p></p>').attr('class', 'w-50 pt-2').text(aboutText) )
  }
  parent.append(headingTag)

  for(const item of obj) {
    let child = $("<p></p>").attr('class', 'card-text').text(item.text)
    child = $('<div></div>').attr('class', 'card-body').append(child)
    child = $('<div></div>').attr('class', 'card').append(' <img src="' +  item.img +'" class="card-img-top" alt="img">', child)
    child  = $('<div></div>').attr('class', 'col-12 col-md-6 col-lg-3 px-0').append(child)
    parent.append(child)
  }

  return $('<div></div>').attr('class', 'container pageWrapper').append(parent)[0]
}

const createFooter = () => {
  let content = $('<a></a>').attr('class', 'navbar-brand fs-6').text(footerText + ' ' + currentDate)
  content = $('<div></div>').attr('class', 'container-fluid').append(content)
  return  $('<nav></nav>').attr('class', 'navbar fixed-bottom navbar-dark bg-dark').append(content)[0]
}

const createContactForm = () => {
  let form = $('<div></div>')

  for(const contactField of ContactFields) {
    let label = $('<label></label>').attr('for', contactField.id).attr('class', 'form-label').text(contactField.label)
    let input = $('<input>').attr('type', contactField.type).attr('id', contactField.id).attr('class', 'form-control').attr('name', contactField.id)

    let div = $('<div></div>').attr('class', 'mb-3').append(label, input)
    form.append(div)
  }

  let submitButton = $('<button></button>').attr('type', 'submit').attr('class', 'btn btn-secondary').attr('id', 'submitBtn').text('Submit')
  form.append(submitButton)

  let content = $('<div></div>').attr('class', 'col-10 col-md-8 col-lg-6')
  content.append('<h1 class="pb-4 text-center">Contact Us</h1>', form)
  return $('<div></div>').attr('class', 'row contactWrapper g-0').append(content)[0]
}

// ---------------------------------------------------------------- CODE CONFIG ---------------------------------------------------------------- //

// create top node for the file
let pageContent = document.createElement('div')

// append NAVBAR
pageContent.append(createNavbar())


// get page body tag
let body = $('body');


// conditional statements for different files content
switch (fileName) {
  // if route is index or /
  case 'index.html':
  case'':
    let c = $('<div></div>').attr('class', 'banner').append($('<h1></h1>').text(homeTitle), $('<p></p>').attr('class', 'w-50 pt-2').text(homeText) )
    pageContent.append(c[0])
    break;
    // if route is about
  case 'about.html':
    pageContent.append(createCardSection(Developers, true, 'About Us'))
   break
  // if route is product
  case 'products.html':
    pageContent.append(createCardSection(Projects, false, 'Projects'))
   break
  // if route is service
  case 'services.html':
    pageContent.append(createCardSection(Services, false, 'Services'))
   break
  // if route is contact
  case 'contact.html':
    pageContent.append(createContactForm())
   break
  // if route is contact
  case 'human_resources.html':
    pageContent.append(createPageWithText('Human Resources'))
   break
  // default route
  default:
    pageContent.append(createPageWithText('404 Not Found'))
    break;
}

body.prepend(pageContent, createFooter())

let submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e) => {

  let data = {}

  for(const fieldData of ContactFields) {
    let field = document.getElementById(fieldData.id)
    if (field ) data[fieldData.id] = field.value
  }

  console.log(data)

  setTimeout(() => {
    window.location.href = './';
  }, 3000)

})
