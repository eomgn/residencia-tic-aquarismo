import './Cart.css';
import { useCart } from "../context/CartContext";
import { CartItem } from "../components/CartItem";

export function Cart() {
    const { items, clearCart } = useCart();
    const subTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2 className="cart-title">🛒 Carrinho de Compras</h2>
                {items.length > 0 && (
                    <span className="cart-count">{items.reduce((sum, item) => sum + item.quantity, 0)} itens</span>
                )}
            </div>
            
            {items.length === 0 ? (
                <div className="cart-empty">
                    <p>Seu carrinho está vazio</p>
                    <small>Adicione produtos para continuar</small>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {items.map((item) => (<CartItem key={item.id} item={item} />))}
                    </div>

                    <div className="cart-summary">
                        <div className="cart-total">
                            <span>Subtotal:</span>
                            <span>R${subTotal.toFixed(2)}</span>
                        </div>
                        <div className="cart-total">
                            <span>Frete:</span>
                            <span>Grátis</span>
                        </div>
                        <div className="cart-total grand-total">
                            <span>Total:</span>
                            <span>R${subTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="cart-actions">
                        <button className="continue-shopping">Continuar Comprando</button>
                        <button className="checkout-button">Finalizar Compra</button>
                        <button className="clear-button" onClick={clearCart}>
                            Limpar Carrinho
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}