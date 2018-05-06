/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

let url = 'http://localhost:8888?search_string=';

var Movie = {

  get: (searchString) => {
    var full_url = url + searchString;
    return fetch(full_url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
      },
      mode: 'no-cors',
      credentials: 'same-origin'
    });
  },

  parseResponse: ({data, status}) => {
    if (status === 200) {
      console.log(data);
    }
  },
};

export default Movie;
