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

<div class="container">
  <div class="choices">
  <button on:click="{()=> current = 'Login'}">login</button>
  <button on:click="{()=> current = 'Sign Up'}">Sign up</button>
</div>
{#if current === "Login"}
  <div class="form-container">
    <div class="card">
       <h1>Sign In</h1>
      <form action="/" on:submit|preventDefault={LoginUser}>
        <div class="input-container">
          <label for="email"> Email </label>
          <input type="email" name="email" id="" bind:value={email} placeholder="aa@gmail.com"/>
        </div>
        <div class="input-container">
          <label for="password">Password</label>
          <input type="password" name="" id="" bind:value={password} placeholder="******"/>
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
    <label for="email">Email</label>
    <input type="email" name="email" id="" bind:value={signupEmail} placeholder="aa@gmail.com"/>
  </div>
  <div class="input-container">
    <label for="name">Username</label>
    <input type="text" name="username" id=""  bind:value={signupUsername} placeholder="aa"/>
  </div>
  <div class="input-container">
    <label for="password">Password</label>
    <input type="password" name="password" id="" bind:value={signupPassword} placeholder="*****"/>
  </div>
  <div class="input-container">
    <label for="confirm-password">Confirm Password</label>
    <input type="password" name="confirm-password" id=""  bind:value={confirmPassword} placeholder="******"/>
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
</div>
{/if}
<style>
  /* .container {
    background: url(/tree_bark/tree_bark.png);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;around
  } */
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .form-container {
    width: 100%;
    height: 100%;
    min-height: 70vh;
    padding: 20px;
    display: flex;
  }
  
  button {
    background: #226200;
    color: #fff;
    text-transform: uppercase;
    width: 100%;
    margin-top: 30px;
    padding: 10px 20px;
    border-radius: 8px;
  }
  
  .card {
    margin: auto auto;
    width: 450px;
    height: max-content;
    min-height: 450px;
    background: rgb(245, 245, 245);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 14px;
    align-items: center;
    box-shadow:
      /* The top layer shadow */
      0 -1px 1px rgba(0,0,0,0.15),
      /* The second layer */
      0 -10px 0 -5px #eee,
      /* The second layer shadow */
      0 -10px 1px -4px rgba(0,0,0,0.15),
      /* The third layer */
      0 -20px 0 -10px #eee,
      /* The third layer shadow */
      0 -20px 1px -9px rgba(0,0,0,0.15);
  }

  input {
    border: none;
    border-bottom: 2px solid black;
    padding-left: 0px;
    position: relative;
  }

  .choices {
		text-transform: uppercase;
    display: flex;
    align-items: center;
		justify-content: center;
    width: 450px;
	}
  .choices button {
    width: 50%;
    border-radius: 0px;
    border: none;
    outline: none;
  }
   /* input[type="text"] {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        border: none;
        border-bottom: 1px solid black;
        outline: none;
        background: transparent;
        margin-bottom: 30px;
    }

    label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        pointer-events: none;
        transition: .5s;
    }
    .form-container-select label {
        position: unset;
    }
   input:focus ~ label, input:valid ~ label{
        top: -20px;
        left: 0;
        font-size: 12px;
    } */

    label{
      /* display: none; */
      padding: 10px 0px;
    }

</style>
