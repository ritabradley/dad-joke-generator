const joke = document.querySelector('#joke');
const generateBtn = document.querySelector('#generate-joke');
const url = 'https://icanhazdadjoke.com/';

const addJokeContent = async () => {
    const jokeContent = await fetchJoke()

    try {
        joke.innerText = jokeContent;
    } catch (e) {
        console.log("Something went wrong!",e);
    }
}

const fetchJoke = async () => {
    try {
        const res = await fetch(url, {
            headers: { accept: 'application/json' },
        });
        const jokeData = await res.json();
        return jokeData.joke;
    } catch (err) {
        console.error("Oh No! Something went wrong.", err);
    }
};

generateBtn.addEventListener('click', addJokeContent);
