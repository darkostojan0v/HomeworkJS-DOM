console.log('The HTML must not be changed !');

let h1 = document.getElementsByTagName('h1')[1].innerHTML = "I changed this !";
console.log(h1);

let h3 = document.querySelector("h3").innerHTML = "And changed this as well !";;
console.log(h3);