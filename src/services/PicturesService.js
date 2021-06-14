import axios from 'axios'
import { AppState } from '../AppState'
// import { Picture } from '../Models/Picture'
const nasaApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=RydL6jHw0DRVuXk4UzPW5P2dEZUY4A6CdRC86QXZ&date='
class PicturesService {
  async getPictures() {
    const res = await axios.get(nasaApiUrl + AppState.currentQuery)
    console.log(res.data, 'heres that res bro')
    AppState.picture = res.data
  }
}
export const picturesService = new PicturesService()
