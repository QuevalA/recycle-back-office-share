export const AvatarColumns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  {
    field: 'image',
    headerName: 'Avatar',
    flex: 1,
    renderCell: (params) => {
      return (
        <div>
          <a href={params.row.image}>
            <img
              src={params.row.image}
              className="w-32"
              alt={params.row.image}
            />
          </a>
        </div>
      )
    },
  },
]
