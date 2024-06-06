export const supervisionMenu = [
  { id: 1, name: 'Utilisateurs', value: 'users' },
  { id: 2, name: 'Annonces', value: 'listings' },
  { id: 3, name: 'Images', value: 'images' },
  { id: 4, name: 'Points', value: 'balances' },
]
export const MangementMenu = [
  { id: 5, name: 'Avatars', value: 'avatars' },
  { id: 6, name: 'Catégories', value: 'categories' },
  { id: 7, name: 'Sous Catégories', value: 'subCategories' },
  { id: 8, name: "Type d'annonces", value: 'listingTypes' },
  { id: 9, name: 'Ranks', value: 'ranks' },
]
export const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
}
