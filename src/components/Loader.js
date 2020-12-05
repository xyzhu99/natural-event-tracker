import spinner from '../loading_spinner.gif'

const Loader = () => {
  return (
    <div className="loading_spinner">
      <img src={spinner} alt="Loading" />
      <h1>Fetching Data</h1>
    </div>
  )
}

export default Loader
