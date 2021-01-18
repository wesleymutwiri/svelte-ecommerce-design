<script>
  import cartItems from "../../../pages/cart/cart-store.js";
  export let number;
  export let id;
  export let price;
  export let title;
  export let slug;
  function addToCart() {
    cartItems.addItem({ id: id, title: title, price: price });
  }
</script>

<div class="product">
  <div class="product-image">
    <a href="{slug}">
      <img src={`https://picsum.photos/250/200?random=${number}`} alt="" />
    </a>
  </div>
  <div class="product-description">
    <div class="text-description">
      <h6>{title}</h6>
      <p>1 color available</p>
    </div>

    <div class="price">
      {price}
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="#216200"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-i6dzq1"
        on:click="{addToCart}"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path
          d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
        ></path>
      </svg>
    </div>
  </div>
</div>

<style>
  .product {
    /* width: 200px; */
    display: flex;
    flex-direction: column;
    margin: 30px 0px;
  }
  .product-description {
    display: grid;
    grid-template-areas:
      "text text price"
      "color color color";
    align-items: baseline;
  }

  .text-description h6 {
    grid-area: text;
    width: 100%;
  }
  .text-description p {
    grid-area: color;
    font-weight: 200;
    width: 100%;
  }
  .price {
    grid-area: price;
    font-weight: 200;
    width: 100%;
    padding: 5px 0px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product-image img {
    width: 100%;
  }

  .css-i6dzq1 {
    cursor: pointer;
  }
  .css-i6dzq1:hover {
    transform: scale(1.4);
  }
  @media screen and (max-width: 600px) {
    .product {
      width: 100%;
    }
  }
</style>
