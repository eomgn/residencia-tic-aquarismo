import './CartItem.css';
import { useCart } from '../context/CartContext';

export function CartItem({ item }) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className='cart-item'>
            <div className='cart-item-details'>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)} x {item.quantity}</p>
            </div>

            <div className='cart-item-actions'>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button className='remove-button' onClick={() => removeFromCart(item.id)}>🗑</button>
            </div>
        </div>
    );
}