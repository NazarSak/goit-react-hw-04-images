const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34509131-7c4a0253057acceb1d9b7c008';

export const getNews = (searchText,page) => {
  return fetch(
    `${BASE_URL}?q=${searchText}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

// `https://pixabay.com/api/?q=${searchText}&key=34509131-7c4a0253057acceb1d9b7c008`

// https://pixabay.com/api/?q=cat&page=1&key=34509131-7c4a0253057acceb1d9b7c008
