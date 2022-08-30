function convertToRoman(num) {
  const str = num.toString()
  let mil = ''
  let cent = ''
  let dez = ''
  let uni = ''
  if(str.length >= 1){
    switch(str[str.length - 1]){
      case '1': uni = 'I'; break;
      case '2': uni = 'II'; break;
      case '3': uni = 'III'; break;
      case '4': uni = 'IV'; break;
      case '5': uni = 'V'; break;
      case '6': uni = 'VI'; break;
      case '7': uni = 'VII'; break;
      case '8': uni = 'VIII'; break;
      case '9': uni = 'IX'; break;
    }
    switch(str[str.length - 2]){
      case '1': dez = 'X'; break;
      case '2': dez = 'XX'; break;
      case '3': dez = 'XXX'; break;
      case '4': dez = 'XL'; break;
      case '5': dez = 'L'; break;
      case '6': dez = 'LX'; break;
      case '7': dez = 'LXX'; break;
      case '8': dez = 'LXXX'; break;
      case '9': dez = 'XC'; break;
    }
    switch(str[str.length - 3]){
      case '1': cent = 'C'; break;
      case '2': cent = 'CC'; break;
      case '3': cent = 'CCC'; break;
      case '4': cent = 'CD'; break;
      case '5': cent = 'D'; break;
      case '6': cent = 'DC'; break;
      case '7': cent = 'DCC'; break;
      case '8': cent = 'DCCC'; break;
      case '9': cent = 'CM'; break;
    }
    switch(str[str.length - 4]){
      case '1': mil = 'M'; break;
      case '2': mil = 'MM'; break;
      case '3': mil = 'MMM'; break;
    }
  }
  const arr = [mil, cent, dez, uni]
  console.log(arr.join(""))
 return arr.join("");
}

convertToRoman(649);