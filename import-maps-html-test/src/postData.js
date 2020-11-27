export function postData(endpoint, data) {
  return fetch(`/api/${endpoint}`, { method: 'POST', body: JSON.stringify(data) });
}
