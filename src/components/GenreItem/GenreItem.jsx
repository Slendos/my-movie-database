import React, { useState } from "react";

const GenreItem = ({ genre, searchGenre }) => {
  return (
    <li className="genre-item" onClick={() => searchGenre(genre)}>
      {genre.name}
    </li>
  );
};

export default GenreItem;
