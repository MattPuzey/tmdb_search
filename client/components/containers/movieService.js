/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

let url = 'http://localhost:8888?search_string=';

var Movie = {

  get: (searchString) => {
    var full_url = url + searchString;
    return fetch(full_url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'pragma': 'no-cache',
        'cache-control': 'no-cache'
      },
      credentials: 'same-origin'
    });
  },

  parseResponse: (response) => {
    response.json().then(json => {
      metaData = {
        data: json,
        status: response.status
      };
    });
    if (metaData.status === 200) {
      console.log(metaData.data);
    }
  },
};

export default Movie;
