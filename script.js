const button = document.querySelector("#search");
const paragraph = document.querySelector("#para");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const randomJoke = ()=>{
    fetch(url)
    .then(res => res.json())
    .then((data)=>{
        // console.log(data.joke);
        paragraph.innerText = data.joke;
    })
}

button.addEventListener('click', randomJoke)

