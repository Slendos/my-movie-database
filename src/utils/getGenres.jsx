export const getGenres = (ids, genres) => {
  let finished = false;
  return ids.map((id, index) => {
    if (finished) return;
    if (index >= 1) {
      finished = true;
    }
    let r = genres.filter(genre => genre.id === id);
    console.log(r);
    return (
      <span className="movie-genre" key={index}>
        {r[0] && r[0].name} {index === ids.length - 1 || finished ? " " : "| "}
      </span>
    );
  });
};
