import React, {Component} from "react";

class Product extends Component {
    render() {
        return(
            <div className="product">
                product page
                <p>sp dep : { this.props.description} </p>
            </div>
        )
    } 
}

export default Product;