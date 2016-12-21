import 'whatwg-fetch';
import data from './data';
import Model from './spotify-track/model';
import View from './spotify-track/view';

const results = document.querySelector('.results');

console.log(data['tracks']);

data['tracks'].items.forEach((track) => {
  const model = new Model(track);
  const view = new View(model);
  results.appendChild(view.track);
  view.render();
});
