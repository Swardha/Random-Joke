// initializing the elements
const button = document.querySelector("#search");
const paragraph = document.querySelector("#para");
// url for random jokes
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
// feteching the data from url
const randomJoke = ()=>{
    paragraph.classList.remove("fade");
    fetch(url)
    .then(res => res.json())
    .then((data)=>{
        paragraph.innerText = data.joke;
        paragraph.classList.add("fade");
    })
}
// added event to button
button.addEventListener('click', randomJoke)

