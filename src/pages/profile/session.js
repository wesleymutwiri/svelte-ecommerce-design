import {writable} from 'svelte/store';

const AUTH_SERVER_URL ="http://localhost:8080/login";

let _user = localStorage.getItem("auth-token");

export const session = writable(_user ? JSON.parse(_user) : null);

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
    let text = await response.text();
    
    let data = text;
    localStorage.setItem("auth-token", data);
    return text
  }
  // let authorize = function(event) {
  //   console.log('submit')
    
  //   }
  let answer;
  export function testAPI() {
    fetch('http://localhost:8080').then((response) => {console.log(response.json())})
  }