import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0

      cartList.forEach(eachCart => {
        total += eachCart.price * eachCart.quantity
      })

      return (
        <>
          <div className="summary-container">
            <h1 className="total-amount">
              <span className="order-total">Order Total : </span> Rs {total} /-
            </h1>
            <p className="items-in-cart">{cartList.length} Items in cart</p>
            <button type="button" className="summary-btn d-sm-none">
              Checkout
            </button>
          </div>

          <button type="button" className="summary-btn d-lg-none">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
