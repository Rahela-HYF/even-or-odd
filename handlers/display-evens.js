function evensHandler() {
  debugger;
  // write me!
  /*const nanyElement = document.getElementById('nany-button');
  //const newEntry = document.createElement('li');
document.getElementById('evens-button').innerHTML = strings.evens;
*/
strings.displayed = 'evens';

const currentDisplayed = strings.displayed;
const currentArray = strings[currentDisplayed];

const currentListComponent = renderList(currentArray, currentDisplayed);
const listContainer = document.getElementById('selected');
  listContainer.innerHTML = '';
  listContainer.appendChild(currentListComponent);
  
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'evens',
    strings: JSON.parse(JSON.stringify(strings))
  })
}
