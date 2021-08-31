import React, {useState} from "react";

function Product(props) {
    const [name, setName] = useState('hoan nguyen');

    const sentData = () => {
        props.getDataParent(name);
    }

    return(
        <div className="col-md-3 col-xs-12">
            <div className="card">
                <img src={props.item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Name: {props.item.name}</h5>
                <p className="card-text">Price: {props.item.price}</p>
                <p className="card-text">Made In: {props.item.madeIn}</p>
                <button className="btn btn-primary btn-sm" onClick={sentData}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Product;