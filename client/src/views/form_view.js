const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const sightingInput = {};
  sightingInput.species = evt.target['species'].value;
  sightingInput.location = evt.target['location'].value;
  sightingInput.date = evt.target['date'].value;
  PubSub.publish('SightingView:sighting-submitted', sightingInput);
};

module.exports = SightingFormView;
