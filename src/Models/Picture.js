
export class Picture {
  constructor(data) {
    this.title = data.title
    this.description = data.description
    this.explanation = data.explanation
    this.url = data.url || data.hdurl
  }
}
