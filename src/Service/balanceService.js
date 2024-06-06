import axios from 'axios'
import { config } from '../Utils/Consts'

export async function getAllBalances() {
  let url = `${process.env.REACT_APP_API_URL}profileBalance`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function deleteBalance(id) {
  let url = `${process.env.REACT_APP_API_URL}profileBalance/${id}`
  return axios.delete(url, config).then((res) => {
    return res.data
  })
}
