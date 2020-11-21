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

  //===================================================
  // warning!
  console.warn("Oh Nooo!");

  //===================================================
  // Error :|
  console.error("Shit");

  //====================================================
  // Info
  /* for permanent messages you want to output to the 
  console in your code, such as information on 
  the current app status */
  console.info("I am a console.info() method"); 

  //====================================================
  // Testing
  /* Write message to the console, 
  only if the first argument is false: */
  const p = document.querySelector('p');

  console.assert(p.classList.contains("p"), "That is wrong!")
  // console.assert(p.classList.contains("ouch"), "That is wrong!")

  //====================================================================
  // clearing
  /* clear all messages in the console: */
  console.clear();

  //====================================================================
  // Viewing DOM Elements
  /* the way to see all the properties of 
  a specified JavaScript object in console */
  console.dir(p);
  
  //====================================================================================================
  // Grouping together
  /* create a group of messages in the console */
  dogs.forEach(function(dog){     // dogs.forEach(dog => {})
      console.group(`${dog.name}`); 
      /*  or 'console.groupCollapsed()' to display the message group by clicking the expand button */
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age} dog years old`);
      console.groupEnd(`${dog.name}`);

  })

  // counting

  // timing

}