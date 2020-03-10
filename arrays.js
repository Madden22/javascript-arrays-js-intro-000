var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem)
  return arr
}

function addElementToBeginningOfArray(arr, elem) {
  arr2 = arr
  arr2.unshift(elem)
  return arr2
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem)
  return arr
}

function addElementToEndOfArray(arr, elem) {
  var arr2 = arr
  arr2.push(elem)
  return arr2
}

function accessElementInArray(arr, n) {
  return arr[n]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift()
}

function removeElementFromBeginningOfArray(arr) {
  arr.slice(1)
  return arr
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop()
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length -1)
}
