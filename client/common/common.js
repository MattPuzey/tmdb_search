export function parseJson(response) {
  response.json().then(function(json) {
    return {
      data: json,
      status: response.status
    };
  });
}
