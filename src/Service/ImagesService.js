import axios from 'axios'
import { config } from '../Utils/Consts'

export async function getAllImages() {
  let url = `${process.env.REACT_APP_API_URL}listingImage`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function deleteImage(id) {
  let url = `${process.env.REACT_APP_API_URL}listingImage/${id}`
  return axios.delete(url, config).then((res) => {
    console.log(res)
    return res.data
  })
}
