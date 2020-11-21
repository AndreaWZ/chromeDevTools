window.onload = function(){

  const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

      function makeGreen() {
        const p = document.querySelector('p');
        p.style.color = '#BADA55';
        p.style.fontSize = '50px';
      }


  //================================================
  // Regular
  /* just for quick debugging and spitting 
  things out to the console */
  console.log("Hello World!"); 

  //================================================
  // Interpolated
  var happy = ":)";
  console.log("Hello I am a %s String!", '🤓');
  console.log("Hello I am a %s String!", happy);
  console.log(`Hello I am a ${happy} String!`);

  //=================================================================================================
  // Styled
  /* for style the text on the console */
  console.log('%c This is a great text', 'font-size: 20px; color: blue; background-color: yellow')

  //================================================
  // warning!
  console.warn("Oh Nooo!");

  //================================================
  // Error :|
  console.error("Shit");

  // Info
  /* for permanent messages you want to output to the 
  console in your code, such as information on 
  the current app status */
  console.info("I am a console.info() method"); 

  // Testing
  /* Write message to the console, 
  only if the first argument is false: */
  const p = document.querySelector('p');

  console.assert(p.classList.contains("ouch"), "That is wrong!")

  // clearing

  // Viewing DOM Elements

  // Grouping together

  // counting

  // timing

}