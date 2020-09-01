<div class="card-container">
	<div class="column">
		<div class="card">
			<div class="card-text">
				<p class="discount">Discount 20%</p>
				<h4>Species of plants</h4>
				<p>
					Plants make us happier, healthier, more efficient and boost our
					creativity
				</p>
			</div>

			<div class="card-image">
				<img src="https://picsum.photos/300/200?random=4" alt="" />
			</div>
		</div>
	</div>

	<div class="column-2">
		<div class="small-card">
			<div class="card-text">
				<p class="discount">Sale 40%</p>
				<h4>Wide plants</h4>
				<p>
					We're here to inspire confidence in the next generation of plant
					parents
				</p>
			</div>

			<div class="card-image">
				<img src="https://picsum.photos/300/200?random=3" alt="" />
			</div>
		</div>
		<div class="small-card">
			<div class="card-text">
				<p class="discount">Up to 40% off</p>
				<h4>Natural plants</h4>
				<p>
					Plants make us happier, healthier, more efficient and boost our
					creativity
				</p>
			</div>

			<div class="card-image">
				<img src="https://picsum.photos/300/200?random=6" alt="" />
			</div>
		</div>
	</div>
</div>
<style>
	.card-container {
		display: flex;
		height: max-content;
		width: 100%;
		max-width: 1700px;
		margin: 20px auto;
		margin-top: 30px;
		justify-content: space-around;
	}
	.card {
		background: #f3f3f3;
		/* margin: 10px; */
		display: flex;
		width: fit-content;
		height: 100%;
	}
	.card-image {
		padding: 20px;
	}
	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		padding: 0px;
	}
	.card-text {
		margin: auto;
		padding: 20px;
	}

	.card-text h4 {
		font-weight: bolder;
		text-transform: uppercase;
		margin-bottom: 20px;
	}
	.card-text .discount {
		text-transform: uppercase;
		font-weight: 500;
	}
	p {
		font-weight: 300;
		font-size: 14px;
	}

	.small-card {
		display: flex;
		background: #f3f6ef;
	}

	.column-2 {
		display: flex;
		gap: 20px;
		flex-direction: column;
	}
	@media screen and (max-width: 800px) {
		.card-container {
			flex-direction: column;
		}
	}
	@media screen and (max-width: 500px) {
		.small-card {
			flex-direction: column;
		}
		.card {
			flex-direction: column;
		}
	}
</style>
