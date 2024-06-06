import { ActionsRenderer } from '../../Layouts/ActionsRender'

export const ListingTypeColumns = () => {
  return [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'type', headerName: 'Type', flex: 1 },
    {
      field: '',
      headerName: 'Actions',
      flex: 0,
      renderCell: (params) => {
        return <ActionsRenderer target="listingType" id={params.row.id} />
      },
    },
  ]
}
