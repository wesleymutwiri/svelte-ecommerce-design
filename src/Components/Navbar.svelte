<script>
    import { onMount } from "svelte";
    import { url, isActive } from "@sveltech/routify";
    
    import { scale } from 'svelte/transition';
	  import { quintOut } from 'svelte/easing';
    
    import cartItems from "../pages/cart/cart-store.js";

    let showMobileMenu = false; 
    const handleMobileIconClick = () => {showMobileMenu = !showMobileMenu}

    const mediaQueryHandler = e => {
        if(!e.matches) {
            showMobileMenu = false; 
        }
    };
    let background;
    console.log(background)
    onMount(() => {
        const mediaListener = window.matchMedia("(max-width: 710px)")
        mediaListener.addListener(mediaQueryHandler)
    })
</script>
<svelte:window bind:scrollY={background} />
<nav class={`${(background > 20) ? 'on-scroll': ''}`}>
	<div class="navbar">
        <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
            <div class="middle-line"></div>
        </div>
		<div class="navbar-logo"><a href="/">SOMETHING</a></div>
		<div class={`navbar-items nav-elements${showMobileMenu ? ' mobile': ''}`}>
			<ul>
				<li><a href="{$url('/store')}" on:click={handleMobileIconClick}>Store</a></li>
				<li><a href="#" on:click={handleMobileIconClick}>Plant Care</a></li>
				<li><a href="#" on:click={handleMobileIconClick}>About</a></li>
			</ul>
		</div>
		<div class="navbar-icons">
			<ul>
                <div class={`icons nav-elements${showMobileMenu ? ' mobile': ''}`}>

               
				<li>
					<a href="#">
						<svg
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="css-i6dzq1"
						>
							<circle cx="11" cy="11" r="8"></circle>
							<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
						</svg>
					</a>
				</li>
				<li>
					<a href="#">
						<svg
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="css-i6dzq1"
						>
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
							<circle cx="12" cy="7" r="4"></circle>
						</svg>
					</a>
                </li>
                 </div>
				<li>
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
							<path
								d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
							></path>
							<line x1="3" y1="6" x2="21" y2="6"></line>
							<path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {#if $cartItems.length}
            <span class="badge" transition:scale="{{duration: 500, delay: 500, opacity: 0.5, start: 0.5, easing: quintOut}}">{$cartItems.length}</span>
            {/if}
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
  nav {
    position: fixed;
    width: 100%;
    top: 0;
  }
  .on-scroll {
    background-color: #fff;
  }
  a {
    color: #070707;
    text-decoration: none;
  }
	.navbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 40px;
    align-items: center;
	}
	ul {
		list-style-type: none;
		display: flex;
		justify-content: space-between;
	}
	ul li a {
		padding: 0px 20px;
		color: #070707;
		text-decoration: none;
	}
	.navbar-icons svg {
		width: 20px;
		height: 20px;
    }
    .icons {
        display: flex;
        flex-direction: row;
    }
    .mobile-icon {
		width: 25px;
		height: 25px;
		position: relative;
		cursor: pointer;
		display: none;
		margin-left: 15px;
	}
  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    transition: all 0.4s;
    transform-origin: center;
	background-color: #070707;
  }
  .mobile-icon:before,
  .middle-line {
    top: 0;
  }
  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }
  .mobile-icon:before {
    width: 66%;
  }
  .mobile-icon:after {
    width: 33%;
  }
  .middle-line {
    margin: auto;
  }
  .mobile-icon:hover:before,
  .mobile-icon:hover:after,
  .mobile-icon.active:before,
  .mobile-icon.active:after,
  .mobile-icon.active .middle-line {
    width: 100%;
  }
  .mobile-icon.active:before,
  .mobile-icon.active:after {
    top: 50%;
    transform: rotate(-45deg);
  }
  .mobile-icon.active .middle-line {
    transform: rotate(45deg);
  }

  .cart-logo {
    position: relative;
  }
  .badge {
    display: inline-block;
    position: absolute;
    top: -20px;
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
	@media screen and (max-width: 710px) {
        .navbar {
            padding: 30px;
            align-items: center;
        }
        .nav-elements{
			display: none;
			width: 100%;
			justify-content: space-between;
			margin: 0;
			padding: 0 40px;
			
        }
        .navbar-items.mobile{
            display: block;
            flex-direction: column;
            background: black;
            
            width: 100%;
            height: 90vh;
            position: absolute;
            right: 50vw;
            left: 0vw;
            top: 10vh;
        }
        .navbar-items.nav-elements.mobile ul {
            display: flex;
            flex-direction: column;
            height: inherit;
            align-items: center;
            justify-content: space-around;
            
        }
       .navbar-items.nav-elements.mobile ul a {
            color: white;
        }
        .nav-elements.mobile {
            display: block;
        }
        .icons.mobile{
            position: absolute;
            display: flex;
            flex-direction: row;
            top: 92vh;
            right: 50vw;
            left: 0vw;
            align-items: center;
            justify-content: space-around;
        }
        .icons.mobile a {
            color: white;
        }
		.mobile-icon{
			display: inline-flex;
		}
        
	}
</style>
