import axios from 'axios'
import { config } from '../Utils/Consts'

export async function getCategories() {
  let url = `${process.env.REACT_APP_API_URL}listingCategory`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function getSubCategories() {
  let url = `${process.env.REACT_APP_API_URL}subCategory`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function getSubCategoriesByCategoryId(id) {
  let url = `${process.env.REACT_APP_API_URL}subCategory/category/${id}`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function createCategory(category, image) {
  let url = `${process.env.REACT_APP_API_URL}listingCategory/new`
  return axios.post(url, { categoryImage: image, category: category }, config)
}

export async function createNewSubCategory(subCategory, parentCategory) {
  let url = `${process.env.REACT_APP_API_URL}subCategory/new`
  return axios.post(url, config, {
    subCategory: subCategory,
    fkListingCategory: parentCategory,
  })
}

export async function deleteListingCategory(id) {
  let url = `${process.env.REACT_APP_API_URL}listingCategory/${id}`
  return axios.delete(url, config).then((res) => {
    console.log(res)
    return res.data
  })
}
