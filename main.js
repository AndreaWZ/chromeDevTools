window.onload = function(){

}

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

// Regular
console.log("Hello World!");

// Interpolated
var happy = ":)";
console.log("Hello I am a %s String!", '🤓');
console.log("Hello I am a %s String!", happy);
console.log(`Hello I am a ${happy} String!`);

// Styled
console.log('%c This is a great text', 'font-size: 20px; color: blue; background-color: yellow')

// warning!
console.warn("Oh Nooo!");

// Error :|
console.error("Shit");

// Info

// Testing

// clearing

// Viewing DOM Elements

// Grouping together

// counting

// timing