<script>
    import Navbar from '../Components/Navbar.svelte';
</script>
<div class="navbar">
    <Navbar />
</div>
<main>
    <slot />
</main>

<style>
    main {
        margin-top: 100px;
    }
</style>