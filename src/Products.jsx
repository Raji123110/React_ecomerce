import React, { useContext, useState } from 'react'
import { HelloContext } from './App'

function Product() {

  const { cart, setCart } = useContext(HelloContext)
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([
    { id: 1, productname: "AC", price: 50000,p_img:"https://static.vecteezy.com/system/resources/thumbnails/025/739/597/small/close-up-shot-of-newly-installed-white-air-conditioner-working-ac-hanging-on-the-pastel-color-wall-with-a-lot-of-copy-space-for-text-background-generative-ai-free-photo.jpg"},
    { id: 2, productname: "Refrigerator", price: 70000,p_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVLC_Xi4xaK07FEjmZD7AS8cjmRpFGfSSDA&s" },
    { id: 3, productname: "Laptop", price: 100000,p_img:"https://images.unsplash.com/photo-1491472253230-a044054ca35f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D" },
    { id: 4, productname: "Watch", price: 5000,p_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0HKnaTIcJYlftqSyNterVf_jywhGzP2n16A&s" },
    { id: 5, productname: "Washing Machine", price: 40000,p_img:"https://img.magnific.com/free-psd/modern-white-topload-washing-machine_191095-79985.jpg?semt=ais_hybrid&w=740&q=80" }
  ])

  function addToCart(product) {
    setCart((previous) => [...previous, product])
  }
  const filteredProducts = products.filter(
    (item)=>item.productName.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
      <h1>Products {cart.length}</h1>
      <input
        type="text"
        placeholder='Enter to search products'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
      
      {
        filteredProducts.length ===0? 
        (<p>product Unavilable</p>):(
        (<p>Branded Products</p>)
        )
      }

      {
        products.length === 0 ? (<p>No products available</p>) : (
          <>
          <div id="products"></div>
            {
              filteredProducts.map((v) => (
                <div key={v.id}>
                  <li>{v.productname}</li>
                  <li>{v.price}₹</li>
                  <img src={v.p_img} width="100%"/>

                  <button onClick={() => addToCart(v)}>
                    Add to Cart
                  </button>
                </div>
              ))
            }

            {
              cart.length === 0 ? (
                <p>No items Available in cart</p>
              ) : (
                <>
                  <h1>CART ITEMS</h1>

                  {
                    cart.map((v) => (
                      <div key={v.id}>
                        <li>{v.productname}</li>
                      </div>
                    ))
                  }
                
                </>
              )
            }
          </>
        )
      }
    </>
  )
}

export default Product