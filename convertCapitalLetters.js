let stringIn = prompt('Introduzca un string: ');
let i = 0;
const result = [];

const convertLetters = (str) => {
  if (i < str.trim().length) {
    (i === 0 || i === str.length-1)
      ?  result.push(str[i].toUpperCase())
      :  result.push(str[i].toLowerCase());
    i+=1;
    convertLetters(str);
  }
}

convertLetters(stringIn);

const search = ',';  
const replacer = new RegExp(search, 'g');
console.log(result.toString().replace(replacer, ''));