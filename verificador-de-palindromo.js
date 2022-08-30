function palindrome(str) {
  str = str.replace(/\W|_/g, "").toLowerCase()
  let arr1 = [...str]
  let arr2 = [...str].reverse()
  console.log(arr1, arr2)
  console.log(arr1.join("") == arr2.join(""))
  return arr1.join("") == arr2.join("") ? true : false
}

palindrome("_eye");