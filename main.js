const users =[
  { imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    id: 1,
    name: "Monica Powell",
    handle: "M0nica",
    description: "Building tech to blal laalkadldld",
    followers: "1.9k",
    following: "27",
    favorites: "327",
    location: "New York, New York",
    email: "github@aboutmonica.com",
    website: "https://www.monica.com",
    twitter: "@indigitalcolor",
  }
]

const repository = [
    { repoName: "gatsby-workshop",
      repoDescription:"this is a test sample" ,
      language:"Javascript",
      favorites: "38",
      forks: "8",
      lastUpdated: "19 days ago",
      issues: "2"
    },
    { repoName: "gatsby-workshop",
      repoDescription:"this is a test sample" ,
      language:"Javascript",
      favorites: "38",
      forks: "8",
      lastUpdated: "19 days ago",
      issues: "2"
    },
    { repoName: "gatsby-workshop",
      repoDescription:"this is a test sample" ,
      language:"Javascript",
      favorites: "38",
      forks: "8",
      lastUpdated: "19 days ago",
      issues: "2"
    },
  ]

const packages = [
  {
    packName: "Docker",
    packDescription: "A software platform used for building applications based on containers --- small and lightweight execution environments.",
  },
  {
    packName: "Apache Maven",
    packDescription: "A default package manager used for the Java programming language and the Java runtime environment.",
  },
  {
    packName: "Ruby Gems",
    packDescription: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
  },
  {
    packName: "npm",
    packDescription: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.",
  },
  {
    packName: "Containers",
    packDescription: "A single place for your team to manage Docker images and decide who can see and access your images.",
  }
]

const projects = [
  {
    projName: "Movie Ranks",
    projDescription: "Creates ratings for watched movies",
    time: "8 hours ago"
  },
  {
    projName: "Project Yay",
    projDescription: "A project that utilizing multiple for loops",
    time: "6 days ago"
  },
]

// PROFILE RENDER
const renderProfile = (array) => {

const profileApp = document.querySelector("#profile");
  let domstring = "";
  for (user of array) {
  domstring +=
  `<div class="card">
    <p>Hi everyone</p>
    <img src=${user.imageUrl} class="card-img-top" alt="${user.id}">

  </div>`
  }
  profileApp.innerHTML = domstring

};
renderProfile(users);

// OVERVIEW RENDER
const renderOverview = (array) => {

  const profileApp = document.querySelector("#overviewContent");
    let domstring = "";
    for (const repo of array) {
    domstring +=
    `<div class="pkgCard" class="card" style="width: 18rem;">
    <div class="card-body" id="overview-card">
      <h4 class="card-title"><b>${repo.repoName}</b></h4>
      <p class="card-text">${repo.repoDescription}</p>
      <p class="card-text">${repo.language}</p>
      <p class="card-text">${repo.forks}</p>
      <p class="card-text">${repo.favorites}</p>
    </div>`
    }
    profileApp.innerHTML = domstring;

  };

// PACKAGE RENDER
const renderPackages = (array) => {
  const packPage = document.querySelector("#packContent")
  let packDomString = "";
  for (package of array) {
    packDomString +=
  `<div class="pkgCard card">
      <div class="card-body">
       <h4 class="card-title"><b>${package.packName}</b></h4>
        <p class="card-text">${package.packDescription}</p>
        </div>
  </div>`
  }
  packPage.innerHTML = packDomString

}

// PROJECTS RENDER
const renderProjects = (array) => {
  const projectPage = document.querySelector("#projContent")
  let projDomString = "";
  for (project of array) {
    projDomString +=
  `<div class="prjCard id="projContainer">
      <div class="card-body">
       <h4 class="card-title">${project.projName}</h4>
        <p class="card-text" id="proText">${project.projDescription}</p>
        <p class="card-text" id="proText">${project.time}</p>
        <hr></hr>
        <button class="btn btn-danger" id="delete--${project.id}">Delete</button>
      </div>

        </div>
  </div>`
  }
  projectPage.innerHTML = projDomString
}






// NEW PACKAGE FORM //


// const packageForm = document.querySelector("#newPackForm");



// EVENT LISTENER FOR CREATE BUTTON //
// createButton.addEventListener("click", () => {
//   renderPackages( )
// })



// USING IF STATEMENTS TO CALL DIFFERENT FUNCTIONS
if (document.URL.includes("overview.html")) {
  renderOverview(repository);
}
else if (document.URL.includes("packages.html")) {
  renderPackages(packages);
}
