import { ActionsRenderer } from '../../Layouts/ActionsRender'

export const UserColumns = () => {
  return [
    { field: 'id', headerName: 'ID', flex: 0.2 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'roles',
      headerName: 'Rôles',
      flex: 1,
      renderCell: (params) => {
        return <p>admin</p>
      },
    },
    {
      field: 'createdAt',
      headerName: 'Crée le',
      flex: 1,
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
        return <ActionsRenderer target="user" id={params.row.id} />
      },
    },
    //   { field: 'updatedAt', headerName: 'Crée le', flex: 1 },
  ]
}
