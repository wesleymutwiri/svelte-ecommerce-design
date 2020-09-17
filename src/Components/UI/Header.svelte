<script>
  import { fade } from "svelte/transition";

  const carouselPhotos = [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
    "https://picsum.photos/300/200?random=4",
  ];
  let currentCarouselIndex = 0;
  const next = () =>
    (currentCarouselIndex = (currentCarouselIndex + 1) % carouselPhotos.length);
</script>

<style>
  .carousel {
    width: 100%;
    display: grid;
    grid-template-areas: "name image description";
    grid-template-columns: repeat(3, minmax(0, 1fr));
    height: 60vh;
    gap: 20px;
    margin-bottom: 100px;
  }
  .carousel img {
    grid-area: image;
    width: inherit;
    height: inherit;
    border: none;
  }
  .description {
    display: flex;
    grid-area: description;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 30vh;
    padding: 20px;
  }
  .name {
    grid-area: name;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .shop-now {
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;
    padding: 10px;
  }
  .shop-now span {
    margin-right: 10px;
  }
  .name h2 {
    font-size: 4rem;
  }
  .name {
    padding: 20px;
  }
  .name-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    align-items: center;
  }

  @media screen and (max-width: 800px) {
    .carousel {
      grid-template-areas:
        "name name name"
        "image image image"
        "description description description";
      height: max-content;
    }
    .description {
      margin: 0;
    }
  }
</style>

<div class="carousel">
  <div class="name">
    <div class="name-contain">
      <h2>
        Potted<br />
        Plants Store
      </h2>
      <p>
        We have the best plants. Check out <br />
        our plants in the shop right now
      </p>
    </div>
    <div class="name-buttons">
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-i6dzq1"
        on:click="{next}"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
      {currentCarouselIndex + 1} of {carouselPhotos.length}
    </div>
  </div>
  {#each [carouselPhotos[currentCarouselIndex]] as photo (currentCarouselIndex)}
  <img src="{photo}" alt="" transition:fade />
  {/each}

  <div class="description">
    <h4>Peace Lily</h4>
    <span>Spathiphyllum</span>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem,
      dolorem similique dicta laborum pariatur alias nam obcaecati perspiciatis
      vitae necessitatibus, dolor suscipit dolore eligendi quod animi aliquam
      voluptatem at!
    </p>
    <a href="#" class="shop-now">
      <span> Shop now </span>
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-i6dzq1"
      >
        <line x1="2" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" /></svg
    ></a>
  </div>
</div>
