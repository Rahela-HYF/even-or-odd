function saveHandler() {
  debugger;
  // write m
  const inputElement = document.getElementById("input").value;
 //alert(da);
 if (inputElement === ''){
   alert('please enter value');
 }else if(isNaN(inputElement)){
  //alert(inputElement);
  strings.NaNy.push(inputElement);
 }else if(inputElement % 2 === 0){
  // alert(typeof inputElement +"even");
   strings.evens.push(inputElement);
 }else if (inputElement % 2 === 1){
  // alert(typeof inputElement + "odd");
   strings.odds.push(inputElement);
 }
 
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save',
    newInput: inputElement,
    strings: JSON.parse(JSON.stringify(strings))
  })
}
