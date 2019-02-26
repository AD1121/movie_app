// Routes
// ---------------------------------------------------------------------

const moviesJSON = require('../movies.json');

// Home
exports.home = (req, res) => {

  let movies = moviesJSON.movies;

  res.render('home', {
    title: 'Star Wars Movies',
    movies
  });
};

// movie single
exports.movie_single = (req, res) => {
  let episode_number = req.params.episode_number;
  let movies = moviesJSON.movies;

  if (episode_number >= 1 && episode_number <= 6) {
    let movie = movies[episode_number - 1];
    let title = movie.title;
    let main_characters = movie.main_characters;
    res.render('movie_single', {
      movies,
      title,
      movie,
      main_characters
    });
  } else {
    res.render('notFound', {
      movies,
      title: "This is not the page you are looking for"
    });
  }
};

// Page not found
exports.notFound = (req, res) => {
  let movies = moviesJSON.movies;

  res.render('notFound', {
    movies,
    title: "This is not the page you are looking for"
  });
};
