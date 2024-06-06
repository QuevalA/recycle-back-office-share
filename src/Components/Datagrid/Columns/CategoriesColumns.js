import { ActionsRenderer } from '../../Layouts/ActionsRender'

export const CategoriesColumns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'category', headerName: 'Catégorie', flex: 1 },
  {
    field: 'image',
    headerName: 'Avatar',
    flex: 1,
    renderCell: (params) => {
      return (
        <div>
          <a href={params.row.image}>
            <img src={params.row.image} alt={params.row.image} />
          </a>
        </div>
      )
    },
  },
  {
    field: '',
    headerName: 'Actions',
    flex: 0,
    renderCell: (params) => {
      return (
        <ActionsRenderer
          target="category"
          id={params.row.id}
          alt={params.row.image}
        />
      )
    },
  },
]
