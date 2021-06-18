const express = require('express'),
    morgan = require('morgan');

const app = express();

app.use(morgan('common'));

let topMovies = [
    {
        title: 'My Neighbour Totoro' 
    },
    {
        title: 'Spirited Away'
    },
    {
        title: 'Howl\'s Moving Castle'
    },
    {
        title: 'Deadpool'
    },
    {
        title: 'Your Name'
    },
    {
        title: 'La La Land'
    },
    {
        title: 'The Greatest Showman'
    },
    {
        title: 'Legally Blonde'
    },
    {
        title: 'Parasite'
    },
    {
        title: 'Guardians of the Galaxy'
    }
];

app.get('/', (req, res) => {
    res.send('Welcome to myFlix!');
});

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () =>{
    console.log('Your app is listening on port 8080.');
});