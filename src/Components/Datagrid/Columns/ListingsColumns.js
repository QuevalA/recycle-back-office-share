import { ActionsRenderer } from '../../Layouts/ActionsRender'

export const ListingColumns = [
  { field: 'id', headerName: 'ID', flex: 0.1 },
  { field: 'title', headerName: 'Titre', flex: 0.5 },
  { field: 'description', headerName: 'Description', flex: 0.4 },
  { field: 'fkListingType', headerName: 'Type', flex: 0.3 },
  { field: 'fkListingCategory', headerName: 'Catégorie', flex: 0.1 },
  {
    field: 'image',
    headerName: 'photo',
    flex: 0.2,
    renderCell: (params) => {
      return (
        <img src={params.row.photo} className="w-6" alt={params.row.image} />
      )
    },
  },
  { field: 'name', headerName: 'Pseudo', flex: 0.3 },
  { field: 'city', headerName: 'Ville', flex: 0.3 },
  { field: 'postCode', headerName: 'Code postal', flex: 0.2 },
  {
    field: 'createdAt',
    headerName: 'Créée le',
    flex: 0.4,
    renderCell: (params) => {
      return (
        <p>{new Date(params.row.createdAt.date).toLocaleDateString('fr')}</p>
      )
    },
  },
  {
    field: '',
    headerName: 'Actions',
    flex: 0,
    renderCell: (params) => {
      return <ActionsRenderer target="listing" id={params.row.id} />
    },
  },
]
