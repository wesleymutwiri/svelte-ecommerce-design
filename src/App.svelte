<script>
	import Navbar from './Components/Navbar.svelte';
	import Header from './Components/UI/Header.svelte';
	import Cards from './Components/UI/Card.svelte';
	import Products from './Components/UI/Products.svelte';
</script>

<main>
	<Navbar />
	<Header/>
	<Cards />
	<Products />
</main>
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
					<p>Mon-Fri: 9am - 10pm</p>
					<p>Saturday: 10am - 10pm</p>
					<p>Sunday: 10am - 11pm</p>
				</div>
			</div>
		</div>
		<div class="copyright-footer">
			<div class="row">
				<p>2020 All rights reserved</p>
				<div class="small-navbar">
					<a href="#">Store</a>
					<a href="#">Plant Care</a>
					<a href="#">About</a>
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

	.column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.column a {
		color: #000;
		text-decoration: none;
	}

	.copyright-footer {
		padding: 20px;
	}
	.copyright-footer p {
		font-weight: 200;
	}
	.small-navbar {
		display: flex;
		justify-content: space-around;
	}
	.small-navbar a {
		padding: 0 20px;
		color: #000;
		text-decoration: none;
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
</style>