<script>
  import { session, logout } from "./session.js";
  import { goto, layout } from "@sveltech/routify";

</script>
{#if $session}
<div>this is the profile page</div>
<button on:click={logout}>Logout</button>
{:else}
{$goto('/login')}
{/if}
