var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem)
  return arr
}

function addElementToBeginningOfArray(arr, elem) {
  var arr2 = arr
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
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  var arr2 = arr
  arr2.slice(1)
  return arr2
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length -1)
}
