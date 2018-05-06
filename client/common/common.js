export function parseJSON(response) {
  console.log('response: ' + response);
  return response.json().then(json => {
    return {
      data: json,
      status: response.status
    };
  });
}
