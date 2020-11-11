<script></script>

<div class="form-container">
  <h1>Log In</h1>
  <div class="card">
    <form action="/" method="get">
      <div class="input-container">
        <input type="text" name="" id="" required />
        <label for="name"> Name </label>
      </div>
      <div class="input-container">
        <input type="password" name="" id="" required />
        <label for="password">Password</label>
      </div>
      <div class="button">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</div>
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
