# *edit* Scribd Blur Remover Chrome Extension - SCUnblur

## Description

This Chrome extension allows you to remove the blur effect from documents on the Scribd website, providing a clearer view of the content.

## Features

- **Remove Blur:** The extention will automatically remove the blur effect from Scribd documents.
  
- **Block Ads:** Enjoy uninterrupted reading with no disruptive advertisements.
  
- ***Forked:*** To get rid of random text blurring after a while.

## text-shadow.js
- new code -->
```js
const stop_code = setInterval(() => {
const stylesheet = document.getElementsByClassName('text_layer');
for (let i of stylesheet) {
  i.style.textShadow = 'unset';
}}, 2000)
```
- run this in js console to stop extra code:
```js
clearInterval(stop_code)
```
