let title = document.getElementById("title");
let originalTitle = document.getElementById("original_title");
let director = document.getElementById("director");
let releaseDate = document.getElementById("release_date");

const fetchFilms = async() => {
    let response = await fetch("https://ghibliapi.herokuapp.com/films");
    let data = await response.json() 
    console.log(data);
    display(data); 
}

fetchFilms();

function display(data) {
 for(let i = 0; i < data.length; i++){
     let titleDiv = document.createElement("div");
     let originalTitleDiv = document.createElement("div");
     let directorDiv = document.createElement("div");
     let releaseDateDiv = document.createElement("div");

     titleDiv.innerHTML = `<h3 class="">${data[i].title}</h3>`
     title.appendChild(titleDiv);

     originalTitleDiv.innerHTML = `<h3 class="">${data[i].original_title}</h3>`
     originalTitle.appendChild(originalTitleDiv);

     directorDiv.innerHTML = `<h3 class="">${data[i].director}</h3>`
     director.appendChild(directorDiv);

     releaseDateDiv.innerHTML = `<h3 class="">${data[i].release_date}</h3>`
     releaseDate.appendChild(releaseDateDiv);
  } 
}