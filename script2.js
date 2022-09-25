const joke_container = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");
const url = "https://official-joke-api.appspot.com/random_joke"
// const url = "https://icanhazdadjoke.com";

let getJoke = ()=>{
    var joke = fetch(url)
    .then(data => data.json())
    .then(item => {
        joke_container.textContent = item.joke;
    })
    .catch((error) => {
      console.log(error);
    });
}

btn.addEventListener("click" , getJoke);