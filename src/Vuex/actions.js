export const filterProducts = ({ commit }, filterItem) => {
    commit('FILTER_LIST', filterItem);
}

export const add_to_cart = ({ commit }, cartItems) => {
    commit('CART_LIST', cartItems);
}

export const remove_item = ({ commit }, itemId) => {
    commit('REMOVE_ITEM', itemId);
    console.log(itemId);
}