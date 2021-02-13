export default {
    adaptCart(state, payload) {
        state.cart.items = payload.items;
        state.cart.total = payload.total;
        state.cart.qty = payload.qty;
    }
}