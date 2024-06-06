import {
  AvatarColumns,
  BalanceColumns,
  CategoriesColumns,
  ImagesColumns,
  ListingColumns,
  ListingSubTypesColumns,
  ListingTypeColumns,
  UserColumns,
  RankColumns,
  SubCategoriesColumns,
} from '../Components/Datagrid/Columns'
import { getListings } from '../Service/listingService'
import { getAllImages } from '../Service/ImagesService'
import { getAllAvatars } from '../Service/AvatarController'
import { getCategories, getSubCategories } from '../Service/categoriesService'
import { getAllBalances } from '../Service/balanceService'
import { getAllUsers } from '../Service/userService'
import { getAllRanks } from '../Service/rankService'
import { getListingTypes, getSubTypes } from '../Service/listingTypeService'

export function handleColumnsAndRows(
  column,
  setIsLoading,
  setColumns,
  setResults
) {
  setIsLoading(true)
  switch (column) {
    case 'users':
      setColumns(UserColumns)
      getAllUsers().then((res) => {
        setIsLoading(false)
        setResults(res)
      })
      break
    case 'listings':
      setColumns(ListingColumns)
      getListings().then((res) => {
        setIsLoading(false)
        setResults(res)
      })
      break
    case 'images':
      setColumns(ImagesColumns)
      getAllImages().then((res) => {
        setIsLoading(false)
        setResults(res)
      })
      break
    case 'balances':
      setColumns(BalanceColumns)
      getAllBalances().then((res) => {
        setIsLoading(false)
        setResults(res)
      })
      break
    case 'avatars':
      setColumns(AvatarColumns)
      getAllAvatars().then((res) => {
        setIsLoading(false)
        setResults(res)
      })
      break
    case 'categories':
      setColumns(CategoriesColumns)
      getCategories().then((res) => {
        setIsLoading(false)
        setResults(res)
      })
      break
    case 'subCategories':
      setColumns(SubCategoriesColumns)
      getSubCategories().then((res) => {
        setIsLoading(false)
        setResults(res)
      })
      break
    case 'listingTypes':
      setColumns(ListingTypeColumns)
      getListingTypes().then((res) => {
        setIsLoading(false)
        setResults(res)
      })
      break
    case 'ranks':
      setColumns(RankColumns)
      getAllRanks().then((res) => {
        setIsLoading(false)
        setResults(res)
      })
      break
    default:
      setColumns(UserColumns)
      getAllUsers().then((res) => {
        setIsLoading(false)
        setResults(res)
      })
  }
}
