/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

let url = 'http://localhost:8888/search?text=';
let basicHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'pragma': 'no-cache',
  'cache-control': 'no-cache'
};

var Movie = {

  get: (searchString) => {
    var full_url = url + searchString;
    return fetch(full_url, {
      method: 'GET',
      headers: basicHeaders,
      credentials: 'same-origin'
    });
  },

  parseResponse: ({data, status}) => {
    let titles = [];
    for (var result of data.results) {
      titles.push(result.title);
    }
    return titles;
  },
};

export default Movie;
