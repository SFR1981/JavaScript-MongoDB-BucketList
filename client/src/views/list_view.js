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

    this.checkBoxStatus(wishStatus, wish);
    wishStatus.addEventListener("click", ()=>{
      if(wish.status==="true")
      {wish.status="false";}
      else
      {wish.status="true";}
      console.log("ListView:", wish._id);
      console.log(wish.status);
      PubSub.publish("ListView:check-wish", wish);

    });

    wishContainer.appendChild(wishStatus);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      PubSub.publish('ListView:delete-wish', wish)
    });
    wishContainer.appendChild(deleteButton);

    const wishDescription = document.createElement('p');
    wishDescription.textContent = wish.wishes;
    if (wishStatus.checked === true){
      wishDescription.classList.add("done");
    };
    wishContainer.appendChild(wishDescription);
    this.container.appendChild(wishContainer);

  })

};

ListView.prototype.checkBoxStatus = function (wishStatus, wish) {
  if(wish.status === "false")
    {wishStatus.checked = false;}
    else
    {wishStatus.checked = true;

    }

};



module.exports = ListView;
