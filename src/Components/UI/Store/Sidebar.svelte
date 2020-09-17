<div class="sidebar">
  <div class="container">
    <h2 class="sidebar-header">Categories</h2>
    <ul>
      <li><a href="#">All Products</a></li>
      <li><a href="#">Flower Pot</a></li>
      <li><a href="#">Potted Plant</a></li>
      <li><a href="#">Accessories</a></li>
    </ul>
  </div>
  <div class="container">
    <h2 class="sidebar-header">Filter by</h2>
    <h4>Price</h4>
    <div class="price-slider">
      <span>
        <input type="number" value="5000" min="0" max="120000" />
        <input type="number" value="50000" min="0" max="120000"
      /></span>

      <svg width="100%" height="24">
        <line
          x1="4"
          y1="0"
          x2="300"
          y2="0"
          stroke="#212121"
          stroke-width="12"
          stroke-dasharray="1 28"
        ></line>
      </svg>
      <input value="25000" min="0" max="120000" step="500" type="range" />
      <input value="50000" min="0" max="120000" step="500" type="range" />
    </div>
  </div>

  <div class="container">
    <h4 class="sidebar-header">Size</h4>
    <ul>
      <li class="sizes"><a href="#">Small</a></li>
      <li class="sizes"><a href="#">Medium</a></li>
      <li class="sizes"><a href="#">Large</a></li>
    </ul>
  </div>
  <div class="container">
    <h4 class="sidebar-header">Color</h4>
    <div class="container">
      <div class="row">
        <div class="color green"></div>
        <div class="color"></div>
        <div class="color orange"></div>
        <div class="color brown"></div>
        <div class="color red"></div>
      </div>
    </div>
  </div>
  <div class="container">
    <h5 class="sidebar-header"><a href="#">Pet-Friendly</a></h5>
    <h5 class="sidebar-header"><a href="#">Air-purifying</a></h5>
  </div>
  <div class="container">
    <h2 class="sidebar-header">Popular Tags</h2>
    <p>
      <a href="#" class="tags"> Plant,</a>
      <a href="#" class="tags">Flower,</a>
      <a href="#" class="tags">Potted Plant,</a>
      <a href="#" class="tags">Minimalism,</a>
      <a href="#" class="tags"> Room Flower</a>
    </p>
  </div>
</div>

<style>
  .sidebar {
    max-width: 300px;
    width: max-content;
    margin-right: 15px;
  }
  .sidebar-header {
    margin-bottom: 30px;
    color: black;
  }
  li {
    padding: 15px 0;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .container {
    margin: 20px 0;
  }
  a {
    color: grey;
    text-decoration: none;
  }
  p {
    color: grey;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .tags {
    color: grey;
  }
  .sizes {
    padding: 5px 0;
  }

  .row {
    display: flex;
    justify-content: space-around;
    max-width: 240px;
  }
  .color {
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }
  .green {
    background: #216200;
  }
  .orange {
    background: #f19e04;
  }
  .red {
    background: #c80101;
  }
  .brown {
    background: #780a09;
  }
</style>
