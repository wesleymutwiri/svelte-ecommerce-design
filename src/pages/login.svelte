<script>
  import {session, testAPI, authenticate} from './profile/session.js';
  import {onMount} from 'svelte';
  import {goto} from '@sveltech/routify';

  // const cors = require('cors')
  let email = '';
  let password = '';
  let combined;
  let data;
  $: combined = {email: email, password: password};
  $: if(data) {
    $session.data = data;
  }
  onMount(()=> {
    testAPI();
  })
  let result;
  function submitHandler() {
    result = authenticate(combined);
    email = '';
    password = '';
  }
    
</script>
{#if $session}
  {$goto('/profile')}
{:else}

<div class="form-container">
  <h1>Log In</h1>
  <div class="card">
    <form action="/" on:submit|preventDefault={submitHandler}>
      <div class="input-container">
        <input type="email" name="email" id="" required bind:value={email} />
        <label for="email"> Email </label>
      </div>
      <div class="input-container">
        <input type="password" name="" id="" required bind:value={password}/>
        <label for="password">Password</label>
      </div>
      {name} {password}
      <div class="button">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</div>
<div>

      {#if result===undefined}
        <p>Undefined result</p>
      {:else}
        {#await result}
          <div>logging in </div>
        {:then value}
          <div>{value}</div>
          {$goto('/profile')}
        {:catch error} 
          <div>{error.message}</div>
        {/await}
      {/if}
  <p>something</p>
  <p>Didn't store auth</p>
</div>
{/if}
<style>
  .form-container {
    width: 100%;
    height: 80vh;
  }
  .input-container {
    position: relative;
  }

  input {
    width: 100%;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 30px;
    outline: none;
    background: transparent;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    pointer-events: none;
    transition: 0.5s;
  }
  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    left: 0;
    font-size: 12px;
  }
  button {
    background: #226200;
    color: #fff;
    text-transform: uppercase;
    width: 100%;
    margin-top: 30px;
  }

  .card {
    margin: auto auto;
    width: 300px;
    height: fit-content;
  }
</style>
