import { Triangle } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen font-Baloo">
      <Triangle
        color="#91C788"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        width="80"
        height="80"
      />
    </div>
  )
}
