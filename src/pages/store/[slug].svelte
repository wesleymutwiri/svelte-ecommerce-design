<script content="module">
  import { params } from "@sveltech/routify";
  import { products } from "../../Components/UI/Product/products-store.js";

  let item = $products.find((product) => product.slug === $params.slug);

  console.log($params.slug);
  console.log($products);
  console.log(item);
</script>

<p>{item.title}</p>
<p>{item.description}</p>
<p>{item.price}</p>
