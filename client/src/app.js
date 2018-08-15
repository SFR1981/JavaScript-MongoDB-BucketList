const FormView = require('./views/form_view.js')
const ListView = require('./views/list_view.js')
const Wishes = require('./models/wishes.js');

document.addEventListener('DOMContentLoaded', () => {

   const form = document.querySelector('form#bucket-form');
   const formView = new FormView(form);
   formView.bindEvents();
   const bucketList = document.querySelector('div#bucket-list');
   const listView = new ListView(bucketList);
   listView.bindEvents();

   const wishes = new Wishes();
   wishes.bindEvents();

   // buckets.getData();
});
