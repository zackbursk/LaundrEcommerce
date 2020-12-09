import React, { Component } from 'react';
import formatCurrency from '../util';
import './style.scss';
import '../../index.css'

class FloatCart extends Component {

    state = {
        isOpen: false
    };

    openFloatCart = () => {
        this.setState({ isOpen: true });
    };

    closeFloatCart = () => {
        this.setState({ isOpen: false });
    };

    render() {
        const { cartItems } = this.props;
        let classes = ['float-cart'];

        if (!!this.state.isOpen) {
            classes.push('float-cart--open');
        }

        return (
            <div className={classes.join(' ')}>
                {this.state.isOpen && (
                    <div
                        onClick={() => this.closeFloatCart()}
                        className="float-cart__close-btn"
                    >
                        X
                    </div>
                )}
                {!this.state.isOpen && (
                    <span
                        onClick={() => this.openFloatCart()}
                        className="bag bag--float-cart-closed"
                    >
            <span className="bag__quantity">{cartItems.length}</span>
          </span>
                )}
                <div className="float-cart__content">
                    <div className="float-cart__header">
                        <span className="header-title">Cart</span>
                    </div>

                    <div className="float-cart__shelf-container">
                        {!cartItems.length && (
                        <p className="shelf-empty">
                            No items currently in the cart.
                        </p>
                    )}
                        <div className="cart">
                            <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item._id}>
                                <div>
                                    <img src={item.image} alt={item.name}></img>
                                </div>
                                <div>
                                    <div>{item.name}</div>
                                    <div className="right">
                                        {formatCurrency(item.price)}x {item.count}{" "}
                                        {item.count === 1 ? (
                                            <button className="button secondary" onClick={() => this.props.removeAllFromCart(item)}>
                                                -
                                            </button>
                                        ) : (
                                            <button className="button secondary" onClick={() => this.props.removeFromCart(item)}>
                                                -
                                            </button>
                                        )}
                                        <button className="button secondary" onClick={() => this.props.addToCart(item)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                            </ul>
                    </div>
                    <div className="float-cart__footer">
                        <div className="sub">Total</div>
                        <div className="sub-price">
                            <p className="sub-price__val">
                                {formatCurrency(
                                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                )}
                            </p>
                        </div>
                        <div /*onClick={() => this.proceedToCheckout()}*/ className="buy-btn">
                            Checkout
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FloatCart;