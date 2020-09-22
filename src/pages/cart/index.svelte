<script>
    import CartItem from '../../Components/UI/Cart/CartItem.svelte';
    import ShippingForm from '../../Components/UI/Cart/ShippingForm.svelte';

    let cats = Array.from(Array(3)).map(x=> Math.random())

</script>

<div class="container">
    
    <div class="cart-items">
        <h1>Shopping Cart</h1>
        {#each cats as cat, i}
        <CartItem />
        {/each}
        <div class="cart-items-footer">
            <a href="/store">Continue Shopping</a>
            <p>Price: <span class="dark-text"> $470.00 </span></p>
        </div>
    </div>
    
   <ShippingForm/>
</div>

<style>
    .container  {
        display: flex;
        justify-content: space-between;
        max-width: 1400px;
        margin: 0 auto;
    }

    .cart-items {
        width: 100%;
    }

    .cart-items h1 {
        margin-bottom: 40px;
    }

    .cart-items-footer {
        display: flex;
        justify-content: space-between;
        padding: 30px;
    }
    .cart-items-footer a {
        color: black;
        text-decoration: none;
    }
    .dark-text {
        font-weight: bolder;
    }
</style>