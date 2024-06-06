import { ActionsRenderer } from '../../Layouts/ActionsRender'

export const ImagesColumns = [
  { field: 'id', headerName: 'ID', flex: 0.2 },
  {
    field: 'image',
    headerName: 'Image',
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
    field: 'fkListingId',
    headerName: "ID d'annonce",
    flex: 0.5,
  },
  {
    field: 'createdAt',
    headerName: 'Crée le',
    flex: 0.5,
    renderCell: (params) => {
      return (
        <p>{new Date(params.row.createdAt.date).toLocaleDateString('fr')}</p>
      )
    },
  },
  {
    field: '',
    headerName: 'Actions',
    flex: 1,
    renderCell: (params) => {
      return <ActionsRenderer target="image" id={params.row.id} />
    },
  },
  //   { field: 'updated_at', headerName: 'Crée le', flex: 1 },
]
