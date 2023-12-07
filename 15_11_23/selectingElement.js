const body = document.body
const bodyChildNodes = body.childNodes //NodeList:array-like (implement for-each, cannot array methods), return children with all node types
const bodyChildren = body.children //HTMLCollection:array-like (not implement for-each, cannot array methods), return children with only element type
console.log(body)
console.log(bodyChildNodes)
console.log(bodyChildren)
bodyChildNodes.forEach((bcn) => {
  console.log(bcn)
})
Array.from(bodyChildren).forEach((bc) => {
  console.log(bc)
})