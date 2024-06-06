import axios from 'axios'
import { config } from '../Utils/Consts'

export async function createType(type) {
  let url = `${process.env.REACT_APP_API_URL}listingType/new`

  return axios.post(url, config, { type: type }).then((res) => {
    return res.status
  })
}

export async function getListingTypes() {
  let url = `${process.env.REACT_APP_API_URL}listingType`
  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function getSubTypes() {
  let url = `${process.env.REACT_APP_API_URL}subType`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function createSubType(subType, type) {
  let url = `${process.env.REACT_APP_API_URL}subType/new`

  return axios
    .post(url, config, { fkListingType: type, subType: subType })
    .then((res) => {
      return res.status
    })
}

export async function deleteListingSubType(id) {
  let url = `${process.env.REACT_APP_API_URL}listingSubType/${id}`
  return axios.delete(url, config).then((res) => {
    return res.data
  })
}
export async function deleteListingType(id) {
  let url = `${process.env.REACT_APP_API_URL}listingType/${id}`
  return axios.delete(url, config).then((res) => {
    return res.data
  })
}
