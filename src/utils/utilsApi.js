function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
};

const request = (url, options) => fetch(url, options).then(checkResponse);

export default request;
