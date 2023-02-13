import { IProduct } from "../models/Products"

interface ProductProps{
    product: IProduct
}

export function Product({product}: ProductProps){
    
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2 w-1/2 mx-4">
            
            <img src={product.img} className="w-1/4" alt="" />
            <p>{product.title}</p>
            <span className="font-bold">{product.price} р.</span>
            <span className="font-bold">Осталось: {product.stock}</span>

        </div>
    )
}
