const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  const reverse = reverseString(value);

  if (value == reverse) {
    alert("Palindrone!!");
  } else {
    alert("not a Palindrone!");
  }

  input.value = "";
}
