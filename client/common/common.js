export function parseJSON(response) {
  return response.json().then(json => {
    console.log(json);
    return {
      data: json,
      status: response.status
    };
  });
}
