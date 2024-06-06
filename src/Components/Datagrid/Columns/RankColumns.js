import { ActionsRenderer } from '../../Layouts/ActionsRender'

export const RankColumns = () => {
  return [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'level', headerName: 'Niveau', flex: 1 },
    {
      field: '',
      headerName: 'Actions',
      flex: 0,
      renderCell: (params) => {
        return <ActionsRenderer target="rank" id={params.row.id} />
      },
    },
  ]
}
