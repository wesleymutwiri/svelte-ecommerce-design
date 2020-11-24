import {writable} from 'svelte/store';

const AUTH_SERVER_URL ="http://localhost:8080/login";

const AUTH_SIGNUP = "http://localhost:8080/users";

let _user = localStorage.getItem("auth-token");

export const session = writable(_user ? _user : null);

session.subscribe((value) => {
    if (value) localStorage.setItem("auth-token", value);
    else localStorage.removeItem("auth-token");
})

export const logout = () => {session.set(null); localStorage.removeItem("auth-token"); console.log("function ran");} ;

export async function authenticate(combined) {
    let response = await fetch(AUTH_SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(combined) // body data type must match "Content-Type" header
    });
    if (!response.ok) {
      const message = `Incorrect Details: ${response.status}`;
      console.log(message);
      throw new Error(message);
    }
    let text = await response.json();
    localStorage.setItem("auth-token", text);
    return text;
  }
  // let authorize = function(event) {
  //   console.log('submit')
    
  //   }
  let answer;

  export async function signup(combined) {
    let response = await fetch(AUTH_SIGNUP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(combined)
    });
    if(!response.ok) {
      const message = `Incorrect Details: ${response.status}`;
      console.log(message);
      throw new Error(message);
    }
    let text = await response.json();
    return text;
  }
  export function testAPI() {
    fetch('http://localhost:8080').then((response) => {console.log(response.json())})
  }