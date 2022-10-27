const joke = document.querySelector('#joke');
const generateBtn = document.querySelector('#generate-joke');
const url = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
    try {
        const res = await fetch(url, {
            headers: { accept: 'application/json' },
        });
        const jokeData = await res.json();
        joke.innerText = jokeData.joke;
    } catch (err) {
        console.error("Oh No! Something went wrong.", err);
    }
};

generateBtn.addEventListener('click', fetchJoke);
