const users =[
  { imageUrl: "https://r2.fluxpro.art/cm026dr040qxm3blvg2nytglv/0.webp",
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
      repoDescription:"I have no idea what to write so I decided to write the description about how I have no idea what to write" ,
      language:"Javascript",
      favorites: "38",
      forks: "1",
      lastUpdated: "19 days ago",
      issues: "2"
    },
    { repoName: "gatsby-workshop",
      repoDescription:"this is a test sample and I'm trying to put something different inside this one to make sire that this is all working properly" ,
      language:"Javascript",
      favorites: "2",
      forks: "8",
      lastUpdated: "19 days ago",
      issues: "2"
    },
    { repoName: "gatsby-workshop",
      repoDescription:"this is a test sample" ,
      language:"Javascript",
      favorites: "38",
      forks: "20",
      lastUpdated: "19 days ago",
      issues: "2"
    },
    { repoName: "gatsby-workshop",
      repoDescription:"this is a test sample and I confirmed this works" ,
      language:"Javascript",
      favorites: "38",
      forks: "8",
      lastUpdated: "19 days ago",
      issues: "2"
    }
  ]

const packages = [
  {
    packName: "Docker",
    packDescription: "blak blah abladahd",
    packImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAJH4R87uV3Rvncs3L3urjeNESAfJGTMTrA&s"
  },
  {
    packName: "Docker",
    packDescription: "blak blah abladahd",
    packImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAJH4R87uV3Rvncs3L3urjeNESAfJGTMTrA&s"
  },
  {
    packName: "Docker",
    packDescription: "blak blah abladahd",
    packImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAJH4R87uV3Rvncs3L3urjeNESAfJGTMTrA&s"
  },
  {
    packName: "Docker",
    packDescription: "blak blah abladahd",
    packImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAJH4R87uV3Rvncs3L3urjeNESAfJGTMTrA&s"
  },
  {
    packName: "Docker",
    packDescription: "blak blah abladahd",
    packImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAJH4R87uV3Rvncs3L3urjeNESAfJGTMTrA&s"
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
  `<div class="card" id="profile-card">
    <img src=${user.imageUrl} class="card-img-top" alt="${user.id}" id="profile-img">
    <h4 class="card-title"><b>${user.name}</b></h4>
    <p class="card-text">${user.handle}</p>
    <p class="card-text">${user.description}</p>
    <p class="card-text">${user.handle}</p>

    <button type="button" class="btn btn-light">Follow</button>
    <button type="button" class="btn btn-light">Sponsor</button>

    <p class="card-text">${user.followers}</p>
    <p class="card-text">${user.following}</p>
    <p class="card-text">${user.favorites}</p>

    <p class="card-text">${user.location}</p>
    <p class="card-text">${user.email}</p>
    <p class="card-text">${user.website}</p>
    <p class="card-text">${user.twitter}</p>
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
    `<div class="overCard" style="width: 18rem;">
      <div class="card-body" id="overview-card">
        <h5 class="card-title" id="overviewPinTitle">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM1auBCJkMIVvyng1YBThtzvnsATUxqt5tA&s" alt="Icon" style="width: 20px; height: 20px; vertical-align: middle;">
          <b>
          ${repo.repoName}
         </b>
        </h5>
        <p class="card-text">${repo.repoDescription}</p>

        <div class="lanForkFav" id="lanForkFavOverview">
          <p class="card-text">${repo.language}</p>
          <p class="card-text">
            <img src="https://cdn.icon-icons.com/icons2/1875/PNG/512/gitfork_120084.png" alt="Icon" style="width: 20px; height: 20px; vertical-align: middle;">
            ${repo.forks}
          </p>
          <p class="card-text">
            <img src="https://icons.iconarchive.com/icons/github/octicons/512/star-24-icon.png" alt="Icon" style="width: 20px; height: 20px; vertical-align: middle;">
            ${repo.favorites}
          </p>
        </div>

      </div>
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
  `<div class="pkgCard" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAJH4R87uV3Rvncs3L3urjeNESAfJGTMTrA&s" alt="Icon" class="nav-icon" style="width: 20px; height: 20px; vertical-align: middle;">
    <b>${package.packName}</b>
    </h4>
    <p class="card-text">${package.packDescription}</p>
    <a href="#" class="btn btn-light" id="learnMore--${package.id}">Learn More</a>
    </div>
  </div>`
  }
  packPage.innerHTML = packDomString
 
}

// REPOSITORY RENDER
const renderRepository = (array) => {
  
  const repoPage = document.querySelector("#repoContent");
    let domstring = "";
    for (const repo of array) {
    domstring += 
    `<div class="repoCard" style="width: 18rem;">
      <div class="card-body" id="overview-card">
      <h4 class="card-title">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM1auBCJkMIVvyng1YBThtzvnsATUxqt5tA&s" alt="Icon" style="width: 20px; height: 20px; vertical-align: middle;">
        <b>
          ${repo.repoName}
        </b>
      </h4>
      <p class="card-text">${repo.repoDescription}</p>
      <p class="card-text">${repo.language}</p>
      <p class="card-text">${repo.forks}</p>
      <p class="card-text">${repo.favorites}</p>
      </div>
    </div>`
    }
    repoPage.innerHTML = domstring;
  
  };

// PROJECT RENDER
const renderProjects = (array) => {
  
  const projectPage = document.querySelector("#projectContent");
    let domstring = "";
    for (const proj of array) {
    domstring += 
    `<div class="projCard" style="width: 18rem;">
      <div class="card-body" id="overview-card">
        <h5 class="card-title">
          <b>${proj.projName}</b>
        </h5>
        <p class="card-text">${proj.projDescription}</p>
        <p class="card-text">${proj.projUpdateDate}</p>
      </div>
    </div>`
    }
    projectPage.innerHTML = domstring;
  
  };
  
// USING IF STATEMENTS TO CALL DIFFERENT FUNCTIONS
if (document.URL.includes("overview.html")) {
  renderOverview(repository);
}
else if (document.URL.includes("packages.html")) {
  renderPackages(packages);
}
else if (document.URL.includes("repos.html")) {
  renderRepository(repository);
}
else if (document.URL.includes("projects.html")) {
  renderProjects(projects);
}