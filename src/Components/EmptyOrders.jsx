import React from 'react';
import BotError from './Vectors/BotError.jsx';
import './Styles/EmptyOrders.css';
function EmptyOrders() {
    return (
        <div className="empty-cart row justify-content-center mb-4 align-items-center">
            <div className="empty-cart__content text-center col-12 col-sm-6">
                <h4>Sem pedidos!</h4>
                <p>Vamos resolver isso? Vá até produtos, encha seu carrinho e complete sua primeira compra.</p>
                <a href="/produtos" className="button fancy-border-radius">Ver Produtos</a>
            </div>
            <div className="empty-cart__image col-12 col-sm-6">
                <BotError />
            </div>
        </div>
    );
}
export default EmptyOrders;