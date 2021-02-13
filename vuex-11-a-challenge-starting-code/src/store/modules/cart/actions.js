export default {
    addProductToCart(context, payload) {
        const cart = context.getters.getCart;
        const productInCartIndex = cart.items.findIndex(
            (ci) => ci.productId === payload.product.id
        );

        if (productInCartIndex >= 0) {
            cart.items[productInCartIndex].qty++;
        } else {
            const newItem = {
                productId: payload.product.id,
                title: payload.product.title,
                image: payload.product.image,
                price: payload.product.price,
                qty: 1,
            };
            cart.items.push(newItem);
        }
        cart.qty++;
        cart.total += payload.product.price;

        context.commit('adaptCart', {
            items: cart.items,
            total: cart.total,
            qty: cart.qty
        });
    },

    removeProductFromCart(context, payload) {
        const cart = context.getters.getCart;
        const productInCartIndex = cart.items.findIndex(
            (cartItem) => cartItem.productId === payload.prodId
        );
        const prodData = cart.items[productInCartIndex];

        cart.items.splice(productInCartIndex, 1);
        cart.qty -= prodData.qty;
        cart.total -= prodData.price * prodData.qty;

        context.commit('adaptCart', {
            items: cart.items,
            total: cart.total,
            qty: cart.qty
        });
    },
}