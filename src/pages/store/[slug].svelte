<script content="module">
  import { params } from "@sveltech/routify";
  import { products } from "../../Components/UI/Product/products-store.js";

  let item = $products.find((product) => product.slug === $params.slug);

  console.log($params.slug);
  console.log($products);
  console.log(item);
</script>

<div class="product-item">
  <div class="product-images">
    <img src="https://picsum.photos/750/500?random=100" alt="">
  </div>
  <div class="product-text">
    <p class="title">{item.title}</p>
    <p class="description">{item.description}</p>
    <p class="price">{item.price}</p>
  </div>
</div>

<style>
  .product-item {
    display: flex;
    justify-content: flex-start;
  }

  .product-images {
    margin: 0px 30px;
  }
  .title {
    font-weight: bold;
    font-size: 1.8rem;
  }
</style>