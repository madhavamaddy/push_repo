import React from "react";
import { Link } from "react-router-dom";

const product =[1,2,3,4,5,6,7,8,9,10]


class Product extends React.Component{
    render(){
        
        return(
            <div>
                <h1>Products Component </h1>
                {product.map((value,index) => {
                    return <button key={value}>
                        <Link to={`/details/${value}`}>{value}</Link>
                    </button>
                    
                })}
            </div>
            )
        }
}
export default Product;
