/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

var Movie = {

  get: () => {
    var full_url = 'localhost:8888';
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

  parseResponse: ({data, status}) => {
    if (status === 200) {
      console.log(data)
    }
  }
};

export default Movie;
