const stop_code = setInterval(() => {const stylesheet = document.getElementsByClassName('text_layer');

for (let i of stylesheet) {
  i.style.textShadow = 'unset';
  
}
console.log('txt unblur');}, 2000)
