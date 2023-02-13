import { Product } from './components/Product';

import {useEffect, useState} from 'react'
import axios from 'axios';
import { IProduct } from './models/Products';

function App(){

  const [products, setProducts] = useState<IProduct[]>([])

  async function getProducts(){
    let response = await axios.get<IProduct[]>("http://localhost:3001/products")
    setProducts(response.data)
  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div className="md:container md:mx-auto mt-3 flex">
      {products.map(el => <Product product={el} key={el.id}/>)}
    </div>
  )
}

export default App;