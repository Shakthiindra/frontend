import React, {useContext} from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'

const CartItem = () => {

    const {all_product, CartItems, removeFromCart} = useContext(ShopContext)


  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">

        </div>
    </div>
  )
}

export default CartItem