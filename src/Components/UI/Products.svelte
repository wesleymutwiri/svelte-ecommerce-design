<script>
    import ProductItem from './Product/ProductItem.svelte';
    let current = "Latest";
    let cats = [1,2,3,4]
</script>

<h3>New Products</h3>
<div class="choices">
	<ul>
		<li>
			<button
				href="#"
				class:active="{current === 'Latest'}"
				on:click="{()=> current = 'Latest'}"
			>
				Latest
			</button>
		</li>
		<li>
			<button
				href="#"
				class:active="{current === 'Best Seller'}"
				on:click="{()=> current = 'Best Seller'}"
			>
				Best Seller
			</button>
		</li>
		<li>
			<button
				href="#"
				class:active="{current === 'Hot Sale'}"
				on:click="{()=> current = 'Hot Sale'}"
			>
				Hot sale
			</button>
		</li>
	</ul>
</div>

<div class="products">
    {#if current === 'Latest'}
    <div class="carousel latest">
        {#each cats as cat, i}
        <ProductItem number=10/>
        {/each}
    </div>
    
    {:else if current === 'Best Seller'}
    <div class="carousel best-seller">
        {#each cats as cat, i}
        <ProductItem number=20/>
        {/each}
    </div>
    
    {:else if current === 'Hot Sale'}
    <div class="carousel hot-sale">
        {#each cats as cat, i}
        <ProductItem number=30/>
        {/each}
    </div>
    {/if}
</div>
<style>
	h3 {
		text-align: center;
		text-transform: uppercase;
	}

	.choices {
		text-transform: uppercase;
	}

	ul {
		display: flex;
		list-style-type: none;
		align-items: center;
		justify-content: center;
	}
	ul li {
		padding: 20px;
	}
	ul li button {
		color: #000;
		text-decoration: none;
		padding: 10px 20px;
		border: none;
		text-transform: uppercase;
		cursor: pointer;
	}
	ul li .active {
		background: #226200;
		color: #fff;
		padding: 10px 20px;
	}
    .products {
        width: 100%;
    }
    .carousel {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        max-width: 1400px;
        margin: 0 auto;
        /* gap: 10px; */
    }

    @media screen and (max-width: 1400px) {
         .carousel {
            flex-wrap: wrap;
            max-width: 100%;
        }
    }

	@media screen and (max-width: 500px) {
		ul {
			flex-direction: column;
		}
		ul li {
			width: 100%;
			padding: 20px;
		}
		ul li button {
			width: 100%;
			padding: 20px;
		}
       
	}
</style>
