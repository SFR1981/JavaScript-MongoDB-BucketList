const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

Request.prototype.post = function (payload) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json());
};

//TODO: for extension PUT

Request.prototype.delete = function (id) {
  return fetch(`${this.url}/${id}`, {
    method: 'DELETE'
  })
    .then((response) => response.json());
};

Request.prototype.put = function (payload) {
console.log("Payload:", payload);
  return fetch(`${this.url}/${payload._id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  })
  .then((response) => response.json())
  .catch((error)=>{
    console.error(error);
  });

};

module.exports = Request;
