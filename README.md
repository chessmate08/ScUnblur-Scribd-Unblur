# *edit* Scribd Blur Remover Chrome Extension - SCUnblur

## Description

This Chrome extension allows you to remove the blur effect from documents on the Scribd website, providing a clearer view of the content.

## Features

- **Remove Blur:** The extention will automatically remove the blur effect from Scribd documents.
  
- **Block Ads:** Enjoy uninterrupted reading with no disruptive advertisements.
  
- ***Forked:*** To get rid of random text blurring after a while.

## extra
- if blur still happens, run this in console.
```js
const un = () => {
  for (let i of document.getElementsByClassName('_1qNr2d')) {
    i.remove();}
}
const stop = setInterval(un, 2000)
// removes blurring element every two seconds. 
```
- Probably still need the extension though. 
