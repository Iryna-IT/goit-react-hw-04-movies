function cutGenres(genres) {
  const mapedGenres = genres.map(({ name }) => name);
  // console.log('mapedGenres: ', mapedGenres);

  let slicedMapedGenres = [];

  if (mapedGenres.length < 3) {
    slicedMapedGenres = mapedGenres;
  } else {
    slicedMapedGenres = mapedGenres.slice(0, 2);
    slicedMapedGenres.push('Other');
  }

  return slicedMapedGenres.join(', ');
}

export default cutGenres;
