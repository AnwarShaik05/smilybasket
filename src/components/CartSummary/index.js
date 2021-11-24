import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {TiTick} from 'react-icons/ti'

import CartContext from '../../context/CartContext'

import './index.css'

const overlayStyles = {
  backgroundColor: 'transparent',
}

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      const onPlaceOrder = () => {
        removeAllCartItems()
      }
      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <Popup
              modal
              trigger={
                <button type="button" className="checkout-button d-sm-none">
                  Check-out
                </button>
              }
              position="center"
              className="popup"
              overlayStyle={overlayStyles}
            >
              <div className="pop-up">
                <span className="success-span">
                  <TiTick className="tick" /> Success
                </span>
                Your Order Will Be Processed Shortly, Thank You.
                <button
                  type="button"
                  className="checkout-button d-sm-none"
                  onClick={onPlaceOrder}
                >
                  Proceed
                </button>
                <button
                  type="button"
                  className="checkout-button d-lg-none"
                  onClick={onPlaceOrder}
                >
                  Proceed
                </button>
              </div>
            </Popup>

            <Popup
              modal
              trigger={
                <button type="button" className="checkout-button d-lg-none">
                  Check-out-
                </button>
              }
              position="center"
              overlayStyle={overlayStyles}
              className="popup"
            >
              <div className="pop-up">
                <span className="success-span">
                  <TiTick className="tick" /> Your order success
                </span>
                Your Order Will Be Processed Shortly, Thank You.
                <button
                  type="button"
                  className="checkout-button d-sm-none"
                  onClick={onPlaceOrder}
                >
                  Proceed
                </button>
                <button
                  type="button"
                  className="checkout-button d-lg-none"
                  onClick={onPlaceOrder}
                >
                  Proceed
                </button>
              </div>
            </Popup>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
