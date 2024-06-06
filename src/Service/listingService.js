import axios from 'axios'
import { config } from '../Utils/Consts'

export async function getListings() {
  let url = `${process.env.REACT_APP_API_URL}listing/images`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function getMyListings(id) {
  let url = `${process.env.REACT_APP_API_URL}listing/me/${id}`
  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function createListing(
  title,
  listingTypeId,
  listingCategoryId,
  listingSubTypeId,
  zip,
  city,
  description
) {
  let url = `${process.env.REACT_APP_API_URL}listing/new`

  return axios
    .post(url, config, {
      city: city,
      street: 'test',
      country: 'test',
      description: description,
      title: title,
      fkListingCategory: listingCategoryId,
      fkListingStatus: 1,
      fkListingType: listingTypeId,
      fkSubListingType: listingSubTypeId,
      fkProfile: 1,
      gpsCoordinates: 1,
      postCode: zip,
      streetName: 'Test',
      streetNumber: 1,
    })
    .then((res) => {
      return res.status
    })
}

export async function deleteListing(id) {
  let url = `${process.env.REACT_APP_API_URL}listing/${id}`
  return axios.delete(url, config).then((res) => {
    console.log(res)
    return res.data
  })
}
