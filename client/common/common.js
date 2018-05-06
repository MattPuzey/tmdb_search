export function parseJson(response) {
  return response.json().then(json => {
    return {
      data: json,
      status: response.status
    };
  });
}
