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
    console.log(wish.status);
    const wishContainer = document.createElement('div');
    const wishStatus = document.createElement('INPUT');
    wishStatus.setAttribute("type", "checkbox");

    this.checkBoxStatus(wishStatus, wish);

    wishContainer.appendChild(wishStatus);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      PubSub.publish('ListView:delete-wish', wish)
    });
    wishContainer.appendChild(deleteButton);

    const wishDescription = document.createElement('p');
    wishDescription.textContent = wish.wishes;
    wishContainer.appendChild(wishDescription);
    this.container.appendChild(wishContainer);

  })

};

ListView.prototype.checkBoxStatus = function (wishStatus, wish) {
  if(wish.status === "false")
    {wishStatus.checked = false;}
    else
    {wishStatus.checked = true;}

};



module.exports = ListView;
