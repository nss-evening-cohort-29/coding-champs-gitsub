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
    packDescription: "blak blah abladahd",
  },
  {
    packName: "Docker",
    packDescription: "blak blah abladahd",
  },
  {
    packName: "Docker",
    packDescription: "blak blah abladahd",
  },
  {
    packName: "Docker",
    packDescription: "blak blah abladahd",
  },
  {
    packName: "Docker",
    packDescription: "blak blah abladahd",
  }
]

const projects = [
  {
    projName: "Project yay",
    projDescription: "blak blah abladahd",
    projUpdateDate: "7 hours ago"
  },
  {
    projName: "Project yay",
    projDescription: "blak blah abladahd",
    projUpdateDate: "7 hours ago"
  },
  {
    projName: "Project yay",
    projDescription: "blak blah abladahd",
    projUpdateDate: "7 hours ago"
  },
  {
    projName: "Project yay",
    projDescription: "blak blah abladahd",
    projUpdateDate: "7 hours ago"
  },
  {
    projName: "Project yay",
    projDescription: "blak blah abladahd",
    projUpdateDate: "7 hours ago"
  },
]
  

// const pins = [
//   { repoName: "gatsby-workshop",
//     repoDescription:"this is a test sample" ,
//     language:"Javascript",
//     favorites: "38",
//     forks: "8",
//   },
//   { repoName: "gatsby-workshop",
//     repoDescription:"this is a test sample" ,
//     language:"Javascript",
//     favorites: "38",
//     forks: "8",
//   },
//   { repoName: "gatsby-workshop",
//     repoDescription:"this is a test sample" ,
//     language:"Javascript",
//     favorites: "38",
//     forks: "8",
//   },
// ]

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


const renderPackages = (array) => {
  const packPage = document.querySelector("#packContent")
  let packDomString = "";
  for (package of array) {
    packDomString += 
  `<div class="pkgCard" class="card" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title"><b>${package.packName}</b></h4>
    <p class="card-text">${package.packDescription}</p>
    <a href="#" class="btn btn-outline-danger" id="learnMore--${package.id}">Learn More</a>
  </div>`
  }
  packPage.innerHTML = packDomString
 
}
renderPackages(packages)

// const renderPinned = (pins) => {
  
//   const pinApp = document.querySelector("#pinned");
//     let pinstring = "";
//     for (pin of pins) {
//     pinstring += 
//     `<div id="pinned">
//     <div class="header">${pin.repoName}</div>
//     <div class="body">
//     <p class="text">${pin.repoDescription}</p>
//     </div>
//     <div class= "footer" >${pin.language}${pin.favorites}</div>
//     </div>`
//     }
//     pinApp.innerHTML = pinstring
  
//   };
  
//   renderPinned();
