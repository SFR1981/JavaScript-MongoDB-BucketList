const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Wishes = function (url) {
  this.url = 'http://localhost:3000/api/bucket';
  this.request = new Request(this.url);
};

Wishes.prototype.bindEvents = function () {
  this.getData();
  // PubSub.subscribe('SightingView:sighting-delete-clicked', (evt) => {
  //   this.deleteSighting(evt.detail);
  // });

  PubSub.subscribe('FormView:wish-submitted', (evt) => {
    this.postWish(evt.detail);
  });


  PubSub.subscribe('ListView:delete-wish', (evt) => {
    console.log(evt.detail);
    this.deleteWish(evt.detail._id);
  });






};

Wishes.prototype.getData = function () {
  this.request.get()
    .then((wishList) => {
      PubSub.publish('Wishes:data-loaded', wishList);
    })
    .catch(console.error);
};

Wishes.prototype.postWish = function (wish) {
  this.request.post(wish)
  .then((wishes) => {
    PubSub.publish('Wishes:data-loaded',wishes);
  })
  .catch(console.error);
};

Wishes.prototype.deleteWish = function (wishId) {
  this.request.delete(wishId)
    .then((wishes) => {
      PubSub.publish('Wishes:data-loaded', wishes);
    })
    .catch(console.error);
};

module.exports = Wishes;
