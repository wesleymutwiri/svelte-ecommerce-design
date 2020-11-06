import { writable, derived } from "svelte/store";

const cart = writable([]);

const customCart = {
  subscribe: cart.subscribe,
  addItem: (item) => {
    cart.update((items) => {
      if (items.find((i) => i.id === item.id)) {
        return [...items];
      }
      return [...items, item];
    });
  },
  removeItem: (id) => {
    cart.update((items) => {
      return items.filter((i) => i.id !== id);
    });
  },
  totalPrice: (items) => {
    return parseFloat(
      items
        .reduce(function (previousValue, currentValue) {
          return previousValue + currentValue.price;
        }, 0)
        .toFixed(2)
    );
  },
};

export default customCart;
