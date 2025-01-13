import { useState } from "react"

const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = () => {
    console.log(newProduct);
    clearInput();
  }

  const clearInput = () => {
    setNewProduct({
      name: "",
      price: "",
      image: "",
    })
  }

  return (
    <div className="flex flex-col items-center w-[80%] max-w-[700px]">

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col bg-primary p-6 pt-8 mt-10 w-full rounded-lg">

        <h1 className="text-2xl text-light font-semibold pb-6 text-center">Create New Product</h1>

        <input type="text"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          placeholder="Product Name" className="p-4 m-2 text-dark rounded-md" />

        <input
          type="text"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          placeholder="Product Price" className="p-4 m-2 text-dark rounded-md" />

        <input
          type="text"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          placeholder="Product Image URL" className="p-4 m-2 text-dark rounded-md" />

        <button
          className="p-4 m-2 mt-8 bg-secondary text-light rounded-md transition-all duration-300 ease-in-out hover:scale-[1.03]"
          onClick={() => handleAddProduct()}>
          Add Product
        </button>

      </form>

    </div>
  )
}

export default CreatePage
