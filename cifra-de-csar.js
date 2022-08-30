function rot13(str) {
  let arr = [...str]
  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case 'A': arr[i] = 'N'; break;
      case 'B': arr[i] = 'O'; break;
      case 'C': arr[i] = 'P'; break;
      case 'D': arr[i] = 'Q'; break;
      case 'E': arr[i] = 'R'; break;
      case 'F': arr[i] = 'S'; break;
      case 'G': arr[i] = 'T'; break;
      case 'H': arr[i] = 'U'; break;
      case 'I': arr[i] = 'V'; break;
      case 'J': arr[i] = 'W'; break;
      case 'K': arr[i] = 'X'; break;
      case 'L': arr[i] = 'Y'; break;
      case 'M': arr[i] = 'Z'; break;
      case 'N': arr[i] = 'A'; break;
      case 'O': arr[i] = 'B'; break;
      case 'P': arr[i] = 'C'; break;
      case 'Q': arr[i] = 'D'; break;
      case 'R': arr[i] = 'E'; break;
      case 'S': arr[i] = 'F'; break;
      case 'T': arr[i] = 'G'; break;
      case 'U': arr[i] = 'H'; break;
      case 'V': arr[i] = 'I'; break;
      case 'W': arr[i] = 'J'; break;
      case 'X': arr[i] = 'K'; break;
      case 'Y': arr[i] = 'L'; break;
      case 'Z': arr[i] = 'M'; break;
    }
  }
  str = arr.join("")
  console.log(str)
  return str;
}

rot13("SERR PBQR PNZC");