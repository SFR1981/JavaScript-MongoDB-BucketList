const PubSub = require('../helpers/pub_sub.js');

const ListView = function (container) {
  this.container = container;
};


ListView.prototype.bindEvents = function () {
  PubSub.subscribe('Wishes:data-loaded', (evt) =>{
    this.render(evt.detail);
  })

};


ListView.prototype.render = function (wishes) {
  this.container.innerHTML = '';
  wishes.forEach((wish)=> {
    const wishContainer = document.createElement('div');
    const wishStatus = document.createElement('INPUT');
    wishStatus.setAttribute("type", "checkbox");
    wishStatus.checked = false;
    wishContainer.appendChild(wishStatus);
    const wishDescription = document.createElement('p');
    wishDescription.textContent = wish.wishes;
    wishContainer.appendChild(wishDescription);
    this.container.appendChild(wishContainer);

  })

};




module.exports = ListView;
