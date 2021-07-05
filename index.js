const express = require("express"),
  morgan = require("morgan");

const app = express();

app.use(morgan("common"));

let movies = [
  {
    title: "My Neighbour Totoro",
  },
  {
    title: "Spirited Away",
  },
  {
    title: "Howl's Moving Castle",
  },
  {
    title: "Deadpool",
  },
  {
    title: "Your Name",
  },
  {
    title: "Kingsman The Secret Service",
  },
  {
    title: "The Greatest Showman",
  },
  {
    title: "Legally Blonde",
  },
  {
    title: "Parasite",
  },
  {
    title: "Guardians of the Galaxy",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to myFlix!");
});

// Gets a list of all movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// Gets data about a single movie by title
app.get("/movies/:title", (req, res) => {
  res.send("Successful GET request returning data on a single movie");
});

// Gets data about a genre by name/title
app.get("/genre/:name", (req, res) => {
  res.send("Successful GET request returning data on a genre");
});

// Gets data about a director by name
app.get("/directors/:name", (req, res) => {
  res.send("Successful GET request returning data on a director");
});

// Adds a user
app.post("/users", (req, res) => {
  res.send("Successful POST request returning data on an added user");
});

// Updates a user's information
app.put("/users/:username", (req, res) => {
  res.send("Successful PUT request indicating the data that was updated");
});

// Adds a movie to list of favorites
app.post("/users/:username/favorites", (req, res) => {
  res.send(
    "Successful POST request indicating whether the movie was successfully added"
  );
});

// Removes a movie from list of favorites
app.delete("/users/:username/favorites/:movie", (req, res) => {
  res.send(
    "Successful DELETE request indicating whether the movie was successfully removed"
  );
});

// Deregisters a user
app.delete("/users/:username", (req, res) => {
  res.send(
    "Successful DELETE request indicating whether the user was successfully removed"
  );
});

app.use(express.static("public"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// listen for requests
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
