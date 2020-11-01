<script>
  import PriceSlider from "../Product/PriceSlider.svelte";
  let showSidebar = false;
  const handleSidebarMenuClick = () => { console.log("clicked"); showSidebar = !showSidebar}
</script>

<div class="sidebar">
  <button class="logo" on:click={handleSidebarMenuClick}>
    Display navbar
  </button>
  <div id="sidebar-contents" class={`${showSidebar ? 'mobile': ''} `}>
  <div class="container" >
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
    <PriceSlider />
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
    <h5 class="sidebar-header">
    <label class="checkbox-container">
      Pet-Friendly
      <input type="checkbox" name="pet-friendly" id="">
      <span class="checkmark"></span>
    </label>
    </h5>
    <h5 class="sidebar-header">
      <label class="checkbox-container">
        Air-purifying
        <input type="checkbox" name="air-purifying" id="">
        <span class="checkmark"></span>
      </label>
    </h5>
    <!-- <label class="container">One
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
</label>
<label class="container">Two
  <input type="checkbox">
  <span class="checkmark"></span>
</label> -->
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
    cursor: pointer;
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
  /* The container */
.checkbox-container {
  display: block;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 200px;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.checkbox-container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked ~ .checkmark {
  /* background-color: #2196F3; */
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid black;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
  .logo {
    display: none;
  }
@media screen  and (max-width: 850px){
    #sidebar-contents {
      display: none;
    }
    .logo {
      display: block;
      width: 150px;
      margin: 0 auto;
    }
    #sidebar-contents.mobile {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .sidebar {
      max-width: none;
      width: 100%;
      padding: 20px;
    }
}

@media screen and (max-width: 530px){
  #sidebar-contents.mobile {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
}
</style>
