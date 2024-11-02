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
  `<div class="pkgCard" class="card" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title"><b>${package.packName}</b></h4>
    <p class="card-text">${package.packDescription}</p>
    <a href="#" class="btn btn-outline-danger" id="learnMore--${package.id}">Learn More</a>
  </div>`
  }
  packPage.innerHTML = packDomString
 
}

// USING IF STATEMENTS TO CALL DIFFERENT FUNCTIONS
if (document.URL.includes("overview.html")) {
  renderOverview(repository);
}
else if (document.URL.includes("packages.html")) {
  renderPackages(packages);
}