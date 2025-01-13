
const HomePage = () => {
  return (
    <div className="flex flex-col items-center">

      <h1 className="text-2xl font-semibold py-10">Current Products</h1>

      <span>No products Found. <a href="/create" className="text-blue-400 hover:underline">Create a product</a></span>

    </div>
  )
}

export default HomePage
