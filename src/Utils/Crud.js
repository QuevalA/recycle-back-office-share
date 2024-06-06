import { deleteUser } from '../Service/userService'
import { deleteRank } from '../Service/rankService'
import { deleteListing } from '../Service/listingService'
import { deleteBalance } from '../Service/balanceService'
import { deleteImage } from '../Service/ImagesService'
import {
  deleteListingSubType,
  deleteListingType,
} from '../Service/listingTypeService'

import {
  setTargetEntity,
  setTargetId,
  setConfirm,
} from '../redux/reducers/crud'

export async function handleDelete(confirm, targetEntity, targetId, dispatch) {
  if (confirm) {
    if (targetEntity === 'balance' && targetId) {
      deleteBalance(targetId)
      alert(targetId)
    }
    if (targetEntity === 'listing' && targetId) {
      deleteListing(targetId)
      alert(targetId)
    }
    if (targetEntity === 'listingType' && targetId) {
      deleteListingType(targetId)
      alert(targetId)
    }
    if (targetEntity === 'listingSubType' && targetId) {
      deleteListingSubType(targetId)
      alert(targetId)
    }
    if (targetEntity === 'rank' && targetId) {
      deleteRank(targetId)
      alert(targetId)
    }
    if (targetEntity === 'user' && targetId) {
      deleteUser(targetId)
      alert(targetId)
    }
    if (targetEntity === 'image' && targetId) {
      deleteImage(targetId)
      alert(targetId)
    }
    if (targetEntity === 'category' && targetId) {
      deleteImage(targetId)
      alert(targetId)
    }
    dispatch(setTargetEntity(''))
    dispatch(setTargetId(''))
    dispatch(setConfirm(false))
  }
}
