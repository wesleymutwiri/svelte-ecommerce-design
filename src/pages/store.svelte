<script>
    import Sidebar from '../Components/UI/Store/Sidebar.svelte';
    import ProductItem from '../Components/UI/Product/ProductItem.svelte';
    import Header from '../Components/UI/Header.svelte';

    let cats = Array.from(Array(21)).map(x=> Math.random())
</script>
<Header/>

<div class="store-container">
    <Sidebar />
    <div class="products-container">
        <div class="products-header">
            <h2>Sort by: A-Z</h2>
            <p>Showing 1-{cats.length} of {cats.length} results</p>
        </div>
        <div class="products">
        {#each cats as cat, i}
        <ProductItem/>
        {/each}
    </div>
    </div>
</div>

<style>
  .store-container {
    display: flex;
    /* width: max-content; */
    justify-content: center;
  }
  
  .products {
    display: grid;
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 1400px;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
  }

  .products-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 20px;
  }
</style>
