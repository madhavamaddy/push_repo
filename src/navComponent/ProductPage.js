import React from "react";
import { useParams } from "react-router-dom";

const ProductPageWrapper = () => {
    const params = useParams();
    return <ProductPage params={params} />;
};

class ProductPage extends React.Component {
    render() {
        const { productsId } = this.props.params;
        return (
            <div>
                <h1>{`It is products page ${productsId}`}</h1>
            </div>
        );
    }
}

export default ProductPageWrapper;
