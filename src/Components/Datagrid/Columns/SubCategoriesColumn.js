import { ActionsRenderer } from '../../Layouts/ActionsRender'

export const SubCategoriesColumns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'subCategory', headerName: 'Sous catégorie', flex: 1 },
  { field: 'fkListingCategory', headerName: 'Id Catégorie', flex: 1 },
  {
    field: '',
    headerName: 'Actions',
    flex: 0,
    renderCell: (params) => {
      return <ActionsRenderer target="category" id={params.row.id} />
    },
  },
]
