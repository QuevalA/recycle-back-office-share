import axios from 'axios'
import { config } from '../Utils/Consts'

export async function getAllAvatars() {
  let url = `${process.env.REACT_APP_API_URL}avatar`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}
export async function createAvatar(avatar) {
  let url = `${process.env.REACT_APP_API_URL}avatar/new`
  return axios.post(url, config, { image: avatar }).then((res) => {
    return res.status
  })
}
