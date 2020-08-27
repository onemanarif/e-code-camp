import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,course) => total + course.price, 0);
    return (
        <div>
             <h4>Course added: {" "+cart.length}</h4>
            <h4>Total Price: {totalPrice}</h4>
            
        </div>
    );
};

export default Cart;