<script>
	let count = 1;
</script>
<div class="cart-item-container">
	<div class="cart-image">
		<img src="https://picsum.photos/250/200?random=2" alt="" />
	</div>
	<div class="cart-description">
		<div class="cart-description-text">
			<h3>Monstera Deliciosa</h3>
			<p class="id">#15426</p>
		</div>
		<div class="cart-numbers">
			<button on:click="{() => count -= 1 ? count > 1: 1}">-</button>
			<input type="number" name="count" id="" bind:value="{count}" />

			<button on:click="{() => count += 1}">+</button>
		</div>
	</div>
	<div class="cart-price"></div>
</div>

<style>
	.cart-item-container {
		display: flex;
	}
	.cart-image img {
		width: 80px;
		height: 100px;
	}
	.cart-numbers {
		display: flex;
	}
	input {
		width: 50px;
	}
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type="number"] {
		-moz-appearance: textfield;
	}
</style>
