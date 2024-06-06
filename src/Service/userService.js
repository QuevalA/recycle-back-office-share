import axios from 'axios'
import { config } from '../Utils/Consts'

export async function getAllUsers() {
  let url = `${process.env.REACT_APP_API_URL}user`
  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function deleteUser(id) {
  let url = `${process.env.REACT_APP_API_URL}admin/user/${id}`
  return axios.delete(url, config).then((res) => {
    console.log(res)
    return res.data
  })
}
