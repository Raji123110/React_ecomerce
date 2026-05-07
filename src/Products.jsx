import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HelloContext } from './App';
function Products() {
  const { cart, setCart } = useContext(HelloContext)
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([
    { id: 1, productName: "AC", price: 50000,p_img:"https://static.vecteezy.com/system/resources/thumbnails/025/739/597/small/close-up-shot-of-newly-installed-white-air-conditioner-working-ac-hanging-on-the-pastel-color-wall-with-a-lot-of-copy-space-for-text-background-generative-ai-free-photo.jpg"},
    { id: 2, productName: "Refrigerator", price: 70000,p_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVLC_Xi4xaK07FEjmZD7AS8cjmRpFGfSSDA&s" },
    { id: 3, productName: "Laptop", price: 100000,p_img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha" },
    { id: 4, productName: "Watch", price: 5000,p_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0HKnaTIcJYlftqSyNterVf_jywhGzP2n16A&s" },
    { id: 5, productName: "Washing Machine", price: 40000,p_img:"https://img.magnific.com/free-psd/modern-white-topload-washing-machine_191095-79985.jpg?semt=ais_hybrid&w=740&q=80" }
  ])
  function addToCart(produce) {
    setCart(previous => [...previous, produce])
  }
  const filteredProducts = products.filter(
    (item) => item.productName.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
      <h1>Products</h1>
      <input
        type="text"
        placeholder='Enter to Search the Product'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {
        filteredProducts.length === 0 ?
          (<p>Product Unavailable</p>) : (
            <h1>Branded Products</h1>
          )
      }
      {
        products.length === 0 ? (<p>No products available</p>) : (
          <>
          <div id="products">
            {
              filteredProducts.map((v) => (
                <div key={v.id}>
                  <li>{v.productName}</li>
                  <li>{v.price}₹</li>
                  <img src={v.p_img} width="80%" />
                  <button onClick={() => addToCart(v)}>Add to Cart</button>
                </div>
              ))
            }
            </div>
            {
              cart.length === 0 ? (<p>No items Available in cart</p>) : (
                <>
                  <h1>CART ITEMS</h1>

                  {
                    cart.map((v) => (
                      <div key={v.id}>
                        <li>{v.productName}</li>
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

export default Products