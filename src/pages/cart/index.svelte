<script>
    import CartItem from '../../Components/UI/Cart/CartItem.svelte';
    import ShippingForm from '../../Components/UI/Cart/ShippingForm.svelte';
    import cartItems from "./cart-store.js";
    import price from "./cart-store.js";

    let cats = Array.from(Array(3)).map(x=> Math.random())
    let opened = false;
    const openForm = () => {console.log("clicked"); opened = !opened}
    let totalprice = cartItems.totalPrice($cartItems);
</script>

<div class="container">
    <div class="cart-items">
        <h1>Shopping Cart</h1>
        {#each $cartItems as item (item.id)}
        <CartItem id={item.id} title={item.title} price={item.price}/>
        {:else}
        <p>Wow, such empty</p>
        {/each}
        <div class="cart-items-footer">
            <a href="/store">Continue Shopping</a>
            <p>Price: <span class="dark-text"> {totalprice} </span></p>
        </div>
    </div>
    <button class="open-form" on:click={openForm}>Shipping Details</button>
    <div class="shipping-form" class:open={opened}>
        <ShippingForm/>
    </div>
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
    .open-form {
        display: none;
        width: max-content;
        padding: 10px;
        background: none;
        cursor: pointer;
    }
    @media screen and (max-width: 1200px) {
        .open-form {
            display: block;
            align-self: flex-start;
        }
        .shipping-form {
            display: none;
        }
        .open {
            display: block;
        }
        .container {
            flex-direction: column;
            align-items: center;
        }
    }
</style>