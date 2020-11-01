<script>
  import { url } from "@sveltech/routify";

  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import cartItems from "../../../pages/cart/cart-store.js";
</script>

<a href="{$url('/cart')}" class="cart-logo">
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="css-i6dzq1"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
  {#if $cartItems.length}
  <span
    class="badge"
    transition:scale="{{duration: 500, delay: 500, opacity: 0.5, start: 0.5, easing: quintOut}}"
    >{$cartItems.length}</span
  >
  {/if}
</a>

<style>
  .cart-logo {
    position: relative;
  }
  .badge {
    display: inline-block;
    position: absolute;
    top: -5px;
    background-color: green;
    color: #d7e6fd;
    border-radius: 50%;
    font-size: 14px;
    min-width: 18px;
    line-height: 18px;
    right: 7px;
    text-align: center;
    width: 25px;
    padding: 3px;
  }
  svg {
    width: 20px;
    height: 20px;
    color: #070707;
  }
  a {
    padding: 0 20px;
  }
</style>
