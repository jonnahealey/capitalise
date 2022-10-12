// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

let x = {
  firstName: 'mr',
  lastName: 'anderson',
};

console.log(x);

function capitalise() {
  const y = x.firstName.charAt(0).toUpperCase() + x.firstName.slice(1);
  const z = x.lastName.charAt(0).toUpperCase() + x.lastName.slice(1);
  console.log(y);
  console.log(z);
  x.firstName = y;
  x.lastName = z;
  return;
}

capitalise();

console.log(x);

appDiv.innerHTML = `<h1>Welcome, ` + x.firstName + ' ' + x.lastName + `.</h1>`;
