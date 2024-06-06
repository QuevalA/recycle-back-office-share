export const MenuItem = ({ id, value, name, setColumn }) => {
  return (
    <p
      className="w-full text-center text-sm font-italic text-white my-2 cursor-pointer"
      onClick={() => {
        setColumn(value)
      }}
      key={id}
    >
      {name}
    </p>
  )
}
