<script>
    import Navbar from '../Components/Navbar.svelte';
    import Footer from '../Components/UI/Footer.svelte';
</script>
<div class="navbar">
    <Navbar />
</div>
<main>
    <slot />
</main>
<Footer/> 
<style>
    main {
        margin-top: 100px;
    }
</style>