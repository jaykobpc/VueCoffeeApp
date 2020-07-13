export const FILTER_LIST = (state, filter) => {
    var newStore = state.Products.filter(item => {
        return item.brand == filter;
    });
    state.filteredProducts = newStore;
}

export const CART_LIST = (state, list) => {
    /** we have to limit entry products */
    if (state.Cart.length >= 10) return '';
    /** push items to cart */
    state.Cart.push(list);
}

export const REMOVE_ITEM = (state, id) => {
    if (!id) return "";
    const index = state.Cart.findIndex(item => item.id == id);
    state.Cart.splice(index, 1);
}