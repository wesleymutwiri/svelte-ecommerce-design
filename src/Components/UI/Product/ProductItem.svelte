<script>
  export let number;
  export let id;
  export let price;
  export let title;
</script>

<div class="product">
  <div class="product-image">
    <img src={`https://picsum.photos/250/200?random=${number}`} alt="" />
  </div>
  <div class="product-description">
    <div class="text-description">
      <h6>{title}</h6>
      <p>1 color available</p>
    </div>

    <div class="price">{price}</div>
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
  }
  .product-image img {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    .product {
      width: 100%;
    }
  }
</style>
