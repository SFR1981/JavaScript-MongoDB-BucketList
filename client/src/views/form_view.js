const PubSub = require('../helpers/pub_sub.js')

const FormView = function (form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

FormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const wish = {
  wishes: evt.target[0].value,
  status: "false"
};
  console.log(wish);
  PubSub.publish('FormView:wish-submitted', wish);
};

module.exports = FormView;
