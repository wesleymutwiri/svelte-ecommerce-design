<script>
  let count = 1;
</script>
<div class="cart-item-container">
  <div class="cart-image">
    <img src="https://picsum.photos/250/200?random=2" alt="" />
  </div>
  <div class="cart-description">
    <div class="cart-description-text">
      <h3>Monstera Deliciosa</h3>
      <p class="id">#15426</p>
    </div>
    <div class="cart-numbers">
      <button on:click="{() => count -= 1 ? count > 1: 1}">-</button>
      <input type="number" name="count" id="" bind:value="{count}" />

      <button on:click="{() => count += 1}">+</button>
    </div>
    <div class="cart-price">$249</div>
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
</style>
