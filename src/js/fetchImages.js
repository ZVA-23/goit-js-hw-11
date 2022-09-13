import axios from 'axios';

export default async function fetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '29884490-c4f2a5a1c3ab9ada3c3f5649a';
  const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}${filter}`).then(response => response.data);
}
