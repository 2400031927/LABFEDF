function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, b) => sum + b.price, 0);

  return (
    <section className="cart">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p>
              {item.title} - ₹{item.price}
            </p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ₹{total}</h3>
    </section>
  );
}

export default Cart;
