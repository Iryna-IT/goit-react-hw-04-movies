import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ffddee44025dd24685ea61d637d56d24';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

const getMovieReviews = async ({ id, page }) => {
  try {
    // console.log(id);
    // console.log(page);
    const { data } = await axios.get(`movie/${id}/reviews`, {
      params: { page },
    });
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default getMovieReviews;

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
