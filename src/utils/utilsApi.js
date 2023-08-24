function checkResponse(res) {
  if (res.ok) {
		const json =  res.json();
    return json;
  }
  return Promise.reject(res.status);
};

const request = (url, options) => fetch(url, options).then(checkResponse);

export default request;
