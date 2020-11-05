<script>
    import Header from "../Components/UI/Header.svelte"
</script>
<Header />
<div class="container">
    <div class="row">
        <div class="column">
            <div class="image">
                <img src="https://picsum.photos/300/200?random=30" alt="">
            </div>
        </div>
        <div class="column">
            <div class="details">
                <h3>Our Mission</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias amet quaerat eos maxime laborum
                    iure, sequi quos mollitia itaque odit consectetur minima neque, sed similique modi sint voluptatem
                    illo magni?</p>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="column">
            <div class="details">
                <h3>About Us</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias amet quaerat eos maxime laborum
                    iure, sequi quos mollitia itaque odit consectetur minima neque, sed similique modi sint voluptatem
                    illo magni?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, animi! Et, explicabo! Esse,
                    amet nobis ipsa debitis sequi magnam tempore, nemo a accusantium facere voluptatem aliquid!
                    Molestiae itaque assumenda accusamus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, animi! Et, explicabo! Esse,
                    amet nobis ipsa debitis sequi magnam tempore, nemo a accusantium facere voluptatem aliquid!
                    Molestiae itaque assumenda accusamus.
                </p>
            </div>
        </div>
        <div class="column">
            <div class="image">
                <img src="https://picsum.photos/300/200?random=49" class="about" alt="">
            </div>
        </div>
    </div>
</div>
<style>
    .container {
        max-width: 1400px;
        margin: 0 auto;
    }

    .row {
        display: flex;
        justify-content: space-evenly;
        margin: 20px 0;
    }

    img {
        width: 500px;
        height: 500px;
    }

    .column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        align-items: center;
    }

    .details {
        width: 80%;
        padding-left: 20px;
    }

    h3 {
        margin-bottom: 20px;
        text-transform: uppercase;
    }

    .about {
        width: 500px;
        height: 600px;
    }
    p {
        margin: 20px 0;
    }
</style>