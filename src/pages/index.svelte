<script>
	import Cards from '../Components/UI/Card.svelte';
	import Products from '../Components/UI/Products.svelte';
	import Header from '../Components/UI/Header.svelte';
</script>
	<Header/>
	<Cards />
	<Products />
<footer>
	<div class="container">
		<div class="details-footer">
			<div class="row">
				<div class="column">
					<h4>Our Store</h4>
					<p>Address: 7183 Ash Dr undefined </p>
					<p>Anaheim, Vermont 25138 United States</p>
					<p>Phone: (207) 555-0119</p>
					<p>Email: melanie.russell@example.com </p>
				</div>
				<div class="column">
					<h4>Help</h4>
					<a href="#">Shipping & Returns</a>
					<a href="#">Privacy Policy</a>
					<a href="#">FAQ</a>
				</div>
				<div class="column">
					<h4>Opening Hours </h4>
					<p class="dates">Mon-Fri: 9am - 10pm</p>
					<p class="dates">Saturday: 10am - 10pm</p>
					<p class="dates">Sunday: 10am - 11pm</p>
				</div>
			</div>
		</div>
	</div>
</footer>
<style>
	.details-footer {
		background: #f3f6ef;
		padding: 40px 20px;
	}

	.row {
		max-width: 1400px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		text-align: center;
	}

	p {
		padding: 10px;
	}

	.column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.column h4 {
		text-transform: uppercase;
		font-size: 20px;
	}

	.column a {
		color: #000;
		text-decoration: none;
		padding: 10px;
	}

	@media screen and (max-width: 820px){
		.row {
			flex-direction: column;
			/* padding: 20px; */
			width: 100%;
		}
		.column {
			margin: 20px 0;
			width: 100%;
		}
	}

	@media screen and (max-width: 500px) {
		.small-navbar {
			display: none;
		}
	}
</style>