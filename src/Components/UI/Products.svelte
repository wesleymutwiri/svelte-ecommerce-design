<script>
	let current = "Latest";
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
	}
	ul li .active {
		background: #226200;
		color: #fff;
		padding: 10px 20px;
	}
	@media screen and (max-width: 500px) {
		ul {
			flex-direction: column;
		}
	}
</style>
