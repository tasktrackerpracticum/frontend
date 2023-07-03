class MainApi {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers
    }
  
    _handleResponse(res) {
        return (res.ok) ? (res.json()) : (Promise.reject(`Ошибка: ${res.status}`))
    }
}
  
const mainApi = new MainApi({
    baseUrl: '',
    headers: {
      'Content-Type': 'application/json'
    }
});
  
export default mainApi;