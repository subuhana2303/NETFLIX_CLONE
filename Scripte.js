// Movie data with poster 
const movies = [
  {
    title: "Stranger Things",
    poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
  },
  {
    title: "Money Heist",
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
  },
  {
    title: "Breaking Bad",
    poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
  },
  {
    title: "The Witcher",
    poster: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg"
  },
  {
    title: "Narcos",
    poster: "https://image.tmdb.org/t/p/w500/3XlEk8LoQTh40YkuJTiqRxVg3d8.jpg"
  },
  {
    title: "Ozark",
    poster: "https://image.tmdb.org/t/p/w500/2BPf9yZvIBGZ7ZhZZ3U6PytxJUe.jpg"
  },
  {
    title: "Black Mirror",
    poster: "https://image.tmdb.org/t/p/w500/1vGB2Raxr3AxFpNJX2HbHs1PKRH.jpg"
  },
  {
    title: "Dark",
    poster: "https://image.tmdb.org/t/p/w500/5hzZ5TRGl05h7R8IrF7bKAC7b2v.jpg"
  },
  {
    title: "13 Reasons Why",
    poster: "https://image.tmdb.org/t/p/w500/iWmVxkOmxHsnYyCh3HFgKa3UhfM.jpg"
  },
  {
    title: "Lucifer",
    poster: "https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg"
  }
];

// Fill each movie row with the movies
document.querySelectorAll('.movie-row').forEach(row => {
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.backgroundImage = `url(${movie.poster})`;
    card.title = movie.title;
    row.appendChild(card);
  });
});
