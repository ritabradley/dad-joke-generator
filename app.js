const joke = document.querySelector('#joke');
const generateBtn = document.querySelector('#generate-joke');
const url = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
    const res = await fetch(url, {
        headers: { accept: 'application/json' },
    });
    const jokeData = await res.json();
    joke.innerText = jokeData.joke;
};

generateBtn.addEventListener('click', fetchJoke);
