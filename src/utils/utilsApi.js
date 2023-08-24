function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

const request = (url, options) => fetch(url, options).then(checkResponse);

export default request;
