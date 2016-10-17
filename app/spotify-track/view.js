import './data';
import data from './model';

export default class view {
  constructor(model) {
    this.model = model;

    this.track = document.createElement('div');
    this.track.classList.add('panel-block', 'track');
    this.track.innerHTML = `
    <div class="panel-block track">
    <img class="track__img" src="" alt="">
    <h2 class="track__artist"></h2>
    <h4 class="track__name"><a class="track__link" href=""></a></h4>
    </div>`;
  }
  render() {
    this.track.querySelector('track__name').innerText = `${this.model.name}`;
    this.track.querySelector('track__artist').innerText = `${this.model.artist}`;
    this.track.querySelector('track__img').innerText = `${this.model.image}`;
  }
}
