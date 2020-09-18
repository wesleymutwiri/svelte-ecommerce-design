<script>
    import CartItem from '../../Components/UI/Cart/CartItem.svelte';
    import SelectCountry from '../../Components/UI/Cart/SelectCountry.svelte';
    let cats = Array.from(Array(3)).map(x=> Math.random())

</script>

<div class="container">
    
    <div class="cart-items">
        <h1>Shopping Cart</h1>
        {#each cats as cat, i}
        <CartItem />
        {/each}
        <div class="cart-items-footer">
            <a href="#">Continue Shipping</a>
            <p>Price: <span class="dark-text"> $470.00 </span></p>
        </div>
    </div>
    
    <div class="shipping-details">
        <h3>Shipping</h3>
        <form action="#">
            <div class="form-container">
                <label for="Name">Your Name</label>
                <input type="text" name="Name" id="">
            </div>
            <div class="form-container">
                <label for="address">Your Address</label>
                <input type="text" name="address" id="">
            </div>
            <div class="form-container">
                <label for="city">Your City</label>
                <input type="text" name="city" id="">

                <label for="Zip Code">Zip Code:</label>
                <input type="text" name="zip-code" id="">
            </div>
            <div class="form-container">
                <label for="country">Country</label>
                <SelectCountry/>
            </div>
            <div class="form-container">
                <label for="shipping-method">Shipping Method</label>
                <select name="shipping-method" id="">
                    <option value="standard-shipping">Standard Shipping(+3.50$)</option>
                    <option value="same-day-shipping">Same Day Shipping(+10.50$)</option>
                    <option value="free-shipping">Free Shipping(0.00$)</option>
                </select>
            </div>
            <div class="form-container">
                <input type="checkbox" name="save" id="">
                <label for="save">Save to first checkout, Next time</label>
            </div>
            </form>
            <button>Buy now</button>
    </div>
</div>

<style>
    .container  {
        display: flex;
        justify-content: space-between;
        max-width: 1400px;
        margin: 0 auto;
    }

    .shipping-details {
        background: #f6f6f6;
        padding: 20px;
        width: 350px;
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