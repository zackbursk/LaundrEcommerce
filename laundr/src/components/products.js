import {Component} from "react";
import formatCurrency from "./util";
import data from '../data'
import '../index.css'

export default class Products extends Component {
    render() {
        return (
            <div className="content">
                <ul className="products">
                    {
                        this.props.products.map(product =>
                            <li>
                                <div className="product" style={{backgroundColor: product.color}}>
                                    <img className="product-image" src={product.image} alt="productImage"/>
                                    <div className="product-name">
                                        <a href="product.html">{product.name}</a>
                                    </div>
                                    <div className="product-price">${product.price}</div>
                                    <button
                                        onClick={() => this.props.addToCart(product)}
                                        className="button primary"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </li>)
                    }
                </ul>
            </div>

        );
    }
}