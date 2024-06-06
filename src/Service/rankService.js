import axios from 'axios'
import { config } from '../Utils/Consts'

export async function createRank(level) {
  let url = `${process.env.REACT_APP_API_URL}profileRank/new`
  return axios.post(url, { level: level }).then((res) => {
    return res.status
  })
}

export async function deleteRank(id) {
  let url = `${process.env.REACT_APP_API_URL}profileRank/${id}`

  return axios.delete(url, config).then((res) => {
    return res.data
  })
}
export async function getAllRanks() {
  let url = `${process.env.REACT_APP_API_URL}profileRank`
  return axios.get(url, config).then((res) => {
    return res.data
  })
}
