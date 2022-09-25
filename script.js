const jokes = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");

// const url = "https://icanhazdadjoke.com"
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const generateJokes = ()=>{
const setHeader = {
  Headers: {
    Accept : "application/json"
  }
}

    fetch(url, setHeader)
    .then(res => res.json())
    .then(data => {
        jokes.innerHTML = data.joke;
    })
    .catch((error) => {
      console.log(error);
    })
}

btn.addEventListener("click" , generateJokes);