export default class view {
  constructor(model) {
    this.model = model;

    this.track = document.createElement('div');
    this.track.classList.add('panel-block');
    this.track.classList.add('track');
    this.track.innerHTML = `
    <div class="media">
      <div class="media-left">
        <div class="track__frame">
          <img class="track__img" src="" alt="">
        </div>
      </div>
      <div class="media-content">
        <h2 class="track__artist"></h2>
        <h4 class="track__name"></h4>
      </div>
      <div class="media-right">
        <div class="track__url">
          <a class="track__link">
            <span class="fa fa-spotify fa-3x"></span>
          </a>
        </div>
      </div>
    </div>`;
  }
  render() {
    this.track.querySelector('.track__name').innerText = this.model.name;
    this.track.querySelector('.track__artist').innerText = this.model.artist;
    this.track.querySelector('.track__img').src = this.model.image;
    this.track.querySelector('.track__link').href = this.model.href;
  }
}
