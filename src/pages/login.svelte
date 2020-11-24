<script>
  import {session, testAPI, authenticate, signup} from './profile/session.js';
  import {onMount} from 'svelte';
  import {goto} from '@sveltech/routify';

  // const cors = require('cors')
  let email = '';
  let password = '';
  let signupEmail = '';
  let signupPassword = '';
  let signupUsername = '';
  let confirmPassword = '';
  let combined;
  let data;
  let SignUpUser;

  $: combined = {email: email, password: password};
  $: SignUpUser = {email: signupEmail, password: signupPassword, username: signupUsername}
  $: if(data) {
    $session.data = data;
  }
  onMount(()=> {
    testAPI();
    checkSession()
  })

  function checkSession() {
    if($session) {
      $goto('/profile')
    }
  }
  let result;
  function LoginUser() {
    result = authenticate(combined)
    email = '';
    password = '';
  }

  function SubmitRegister() {
    result = signup(SignUpUser)
    signupEmail = '';
    signupPassword = '';
    signupUsername = '';
    confirmPassword = '';
  }
  let current = "Login";

    
</script>
{#if $session}
  {$goto('/profile')}
{:else}
<div class="choices">
  <button on:click="{()=> current = 'Login'}">login</button>
  <button on:click="{()=> current = 'Sign Up'}">Sign up</button>
</div>
{#if current === "Login"}
  <div class="form-container">
    <div class="card">
      <form action="/" on:submit|preventDefault={LoginUser}>
        <div class="input-container">
          <input type="email" name="email" id="" required bind:value={email} />
          <label for="email"> Email </label>
        </div>
        <div class="input-container">
          <input type="password" name="" id="" required bind:value={password}/>
          <label for="password">Password</label>
        </div>
        <div class="button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
{:else if current === 'Sign Up'}
<div class="form-container">
  <div class="card">

  <h1>Sign up</h1>
  <form action="" method="post" on:submit|preventDefault={SubmitRegister}>

 
  <div class="input-container">
    <input type="email" name="email" id="" required bind:value={signupEmail} />
    <label for="email">Email</label>
  </div>
  <div class="input-container">
    <input type="text" name="username" id="" required bind:value={signupUsername} />
    <label for="name">Username</label>
  </div>
  <div class="input-container">
    <input type="password" name="password" id="" required bind:value={signupPassword} />
    <label for="password">Password</label>
  </div>
  <div class="input-container">
    <input type="password" name="confirm-password" id="" required bind:value={confirmPassword} />
    <label for="confirm-password">Confirm Password</label>
  </div>
          <div class="button">
          <button type="submit">Sign Up</button>
        </div>
      </form>
  </div>
</div>
{/if}
<div>
      {#if result===undefined}
        <p class="message">Undefined result</p>
      {:else}
        {#await result}
          <div class="message">logging in </div>
        {:then value}
          {$goto('/profile')}
        {:catch error} 
          <div>{ error }</div>
        {/await}
      {/if}
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
  .choices {
		text-transform: uppercase;
    display: flex;
    align-items: center;
		justify-content: center;
    width: 100%;
	}
  .choices button {
    width: max-content;
  }
</style>
