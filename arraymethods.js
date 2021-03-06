const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

planets.forEach(planet => {
    planetEl.innerHTML += `
      <h2>${planet}</h2>
    `
    planetEl.innerHTML += "<hr/>"

    console.log(planet)
  });

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

planetEl.innerHTML += "<h1>Planet Names</h1>";

const planetsArray = planets.map(planet => {

    return planet.toUpperCase()
})

console.table(planetsArray)

planetsArray.forEach(planet => {
    planetEl.innerHTML += `
      <h2>${planet}</h2>
    `
    planetEl.innerHTML += "<hr/>"

    console.log(planet)
  });

//   const planET = planets.filter(planets => {
//     let hasE = false
  
//     if (planets === planets) {
//         hasE = true
//     }
  
//     return hasE.includes('e');
//   })

// NEEDS WORK

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/