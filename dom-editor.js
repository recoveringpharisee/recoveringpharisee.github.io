const element = (type, definition) => {
  let obj = document.createElement(type)
  
  for(let key in definition) {
    obj.setAttribute(key, definition[key])
  }

  return obj
}
