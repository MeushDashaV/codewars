//https://www.codewars.com/users/MeushDashaV


//https://www.codewars.com/kata/51c8991dee245d7ddf00000e
8 kyu
Reversed Words
/*
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The" */

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}


//https://www.codewars.com/kata/572ab0cfa3af384df7000ff8
7 kyu
Training JS #22: Unlock new skills--Arrow function,spread operator and deconstruction
JavaScript:


let shuffleIt=(arr,...arrn)=>{
for (let i=0; i<arrn.length; i++){
      let [a,b] = [arrn[i][0],arrn[i][1]];
      [arr[a],arr[b]] = [arr[b],arr[a]];
  }
  return arr;
}

//https://www.codewars.com/kata/5729b103dd8bac11a900119e

8 kyu
Training JS #21: Methods of String object--trim() and the string template
JavaScript:


function fiveLine(s){
s=s.trim()
  return `${s}\n${s}${s}\n${s}${s}${s}\n${s}${s}${s}${s}\n${s}${s}${s}${s}${s}`
}

//https://www.codewars.com/kata/5728203b7fc662a4c4000ef3

7 kyu
Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
JavaScript:

function alienLanguage(str) {
 let words = str.split(" ");
 words = words.map(x => x.slice(0, x.length-1).toUpperCase() + x[x.length-1].toLowerCase()).join(" ");
return words;
}

//https://www.codewars.com/kata/57280481e8118511f7000ffa

8 kyu
Training JS #18: Methods of String object--concat() split() and its good friend join()
JavaScript:

function splitAndMerge(string, separator) {
  return string.split(" ").map(x => x.split('').join(separator)).join(" ");
}

//https://www.codewars.com/kata/572af273a3af3836660014a1/train/javascript

7 kyu
Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()

function infiniteLoop(arr,d,n){
  for (var i = 1; i <= n; i++){
  if (d === "left"){
    arr[2].push(arr[0].shift());
    arr[1].push(arr[2].shift());
    arr[0].push(arr[1].shift());
  }
  if (d === "right"){
    arr[0].unshift(arr[2].pop());
    arr[1].unshift(arr[0].pop());
    arr[2].unshift(arr[1].pop());
  }
  }
  return arr;
}

//https://www.codewars.com/kata/572cb264362806af46000793/train/javascript

7 kyu
Training JS #24: methods of arrayObject---splice() and slice()

function threeInOne(arr){
  var result = [];
  for(var i=0;i<arr.length;i+=3) {
    result.push(arr[i] + arr[i+1] + arr[i+2]);
  }
  return result
}
