import { ActionsRenderer } from '../../Layouts/ActionsRender'

export const BalanceColumns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'balance', headerName: 'Balance', flex: 1 },
  {
    field: '',
    headerName: 'Actions',
    flex: 0,
    renderCell: (params) => {
      return <ActionsRenderer target="balance" id={params.row.id} />
    },
  },
]
