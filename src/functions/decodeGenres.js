import cutGenres from '../functions/cutGenres';

function decodeGenres(genresIds, allGenres) {
  // console.log(allGenres);
  // console.log(genresIds);

  const filteredGenres = allGenres.filter(genre =>
    genresIds.includes(genre.id),
  );
  // console.log('filteredGenres: ', filteredGenres);

  return cutGenres(filteredGenres);
}

export default decodeGenres;
