<script>
  import cartItems from "../../../pages/cart/cart-store.js";
  import { products } from "../Product/products-store.js";
  let count = 1;
  export let price = 300;
  export let id;
  export let title;

  function removeFromCart() {
    cartItems.removeItem(id);
  }
</script>
<div class="cart-item-container">
  <div class="cart-image">
    <img src="https://picsum.photos/250/200?random=2" alt="" />
  </div>
  <div class="cart-description">
    <div class="cart-description-text">
      <h3>{title}</h3>
      <p class="id">{id}</p>
    </div>
    <div class="cart-numbers">
      <button on:click="{() => count -= 1 ? count > 1: 1}" class="add-remove">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <input
        type="number"
        name="count"
        id=""
        bind:value="{count}"
        required
        min="1"
      />

      <button on:click="{() => count += 1}" class="add-remove">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
    <div class="cart-price">
      {#if count} ${price * count} {:else} ${price} {/if}
    </div>

    <button class="close">
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-i6dzq1"
        on:click="{removeFromCart}"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
</div>

<style>
  .cart-item-container {
    display: flex;
    /* justify-content: space-between; */
    width: 100%;
    /* padding: 20px; */
  }
  .cart-image img {
    width: 140px;
    height: 200px;
    border: 0.5px solid #f6f6f6;
  }
  .cart-numbers {
    display: flex;
  }
  input {
    width: 50px;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .cart-description {
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
    padding: 20px;
  }

  .close {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
  }
  .close:hover {
    transform: scale(1.4);
  }

  .add-remove {
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: 700;
  }
</style>
