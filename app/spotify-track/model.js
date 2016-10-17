export default class model {
  constructor(data) {
    this.artist = data.artists[0].name;
    this.name = data.name;
    this.image = data.album.images[0].url;
    this.href = data.href;
  }
}
