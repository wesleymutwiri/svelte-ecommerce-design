<script>
  //   onMount(() => {
  //     let minSlider = document.querySelector("#min");
  //     let maxSlider = document.querySelector("#max");

  //     function numberWithSpaces(number) {
  //       return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  //     }

  //     function updateDollars() {
  //       let fromValue =
  //         ((maxDollars - minDollars) * minSlider.value) / 100 + minDollars;
  //       let toValue =
  //         ((maxDollars - minDollars) * maxSlider.value) / 100 + minDollars;

  //       document.querySelector("#from").textContent = `$${numberWithSpaces(
  //         Math.floor(fromValue)
  //       )}`;
  //       document.querySelector("#to").textContent = `$${numberWithSpaces(
  //         Math.floor(toValue)
  //       )}`;
  //     }

  //     maxSlider.addEventListener("input", () => {
  //       let minValue = parseInt(minSlider.value);
  //       let maxValue = parseInt(maxSlider.value);

  //       if (maxValue < minValue + 10) {
  //         minSlider.value = maxValue - 10;

  //         if (minValue === parseInt(minSlider.min)) {
  //           maxSlider.value = 10;
  //         }
  //       }

  //       updateDollars();
  //     });

  //     minSlider.addEventListener("input", () => {
  //       let minValue = parseInt(minSlider.value);
  //       let maxValue = parseInt(maxSlider.value);

  //       if (minValue > maxValue - 10) {
  //         maxSlider.value = minValue + 10;

  //         if (maxValue === parseInt(maxSlider.max)) {
  //           minSlider.value = parseInt(maxSlider.max) - 10;
  //         }
  //       }

  //       updateDollars();
  //     });
  //   });
  let minDollars = 0;
  let maxDollars = 100;
  function updateDollars() {}
</script>

<div>
  <div class="multi-range">
    <input
      id="min"
      type="range"
      min="0"
      max="100"
      bind:value="{minDollars}"
      step="1"
    />
    <input
      id="max"
      type="range"
      min="0"
      max="100"
      bind:value="{maxDollars}"
      step="1"
    />
  </div>
  <div class="price text-violet">
    <input type="number" name="min" id="" bind:value="{minDollars}" />
    <input type="number" name="max" id="" bind:value="{maxDollars}" />
  </div>
</div>

<style>
  .text-violet {
    color: #504d9b;
  }
  .header {
    margin: 10px 0 20px;
    font-size: 32px;
  }
  b {
    font-weight: bold;
  }
  .average {
    margin: 10px 0;
    font-size: 18px;
  }
  .multi-range {
    position: relative;
    height: 40px;
    margin: 30px 0;
    width: 240px;
  }
  .multi-range input[type="range"]:nth-child(1)::-webkit-slider-thumb::before {
    background-color: #808080;
  }
  .multi-range input[type="range"]:nth-child(2) {
    background: none;
  }
  .multi-range input[type="range"]:nth-child(2)::-webkit-slider-thumb::before {
    background-color: #808080;
  }
  .multi-range input[type="range"]::-moz-range-track {
    background: none;
  }
  input[type="range"] {
    position: absolute;
    width: 100%;
    padding: 0;
    margin: 0;
    border: 0;
    outline: none;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#504d9b),
        to(#504d9b)
      )
      no-repeat center;
    background: linear-gradient(#504d9b, #504d9b) no-repeat center;
    background-size: 100% 2px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    pointer-events: none;
  }
  input[type="range"]:active,
  input[type="range"]:focus,
  input[type="range"]::-moz-focus-outer {
    border: none;
    outline: none;
  }
  input[type="range"]::-moz-range-thumb {
    position: relative;
    height: 28px;
    width: 28px;
    margin: 10em auto;
    border-radius: 50%;
    border: 3px solid black;
    background-color: black;
    /* box-shadow: 0 0 0 10px #fff; */
    box-shadow: 0px 0px 0px 5px rgb(255, 255, 255) inset;
    -moz-appearance: none;
    appearance: none;
    pointer-events: all;
  }
  input[type="range"]::-moz-range-thumb:hover {
    background-color: #fff;
  }
  input[type="range"]::-moz-range-thumb:active {
    background-color: #fff;
  }
  input[type="range"]::-webkit-slider-thumb {
    position: relative;
    height: 28px;
    width: 28px;
    margin: 5px 0;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.3);
    -webkit-appearance: none;
    appearance: none;
    pointer-events: all;
  }
  input[type="range"]::-webkit-slider-thumb:hover {
    background-color: #deddee;
  }
  input[type="range"]::-webkit-slider-thumb:active {
    background-color: #504d9b;
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
    width: 100px;
    text-align: center;
  }
</style>
