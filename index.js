/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return "UP2010416";
}

function fn() {
  return 'Michael';
}

function sn() {
  return 'Kelly';
}

function add(a,b) {
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function checkObject(obj){
  obj.checked=true
}

function checkObjectInside(obj){
  if(typeof obj.data === "object"){
    obj.data.checked=true
  }
}

function arraySet(arr,i,n){
  if(arr[i]){
    arr[i]=n
  }
}

function addAll(arr){
  let num=0
  for(let i = 0; i<arr.length;i++){
    num=num+arr[i]
  }
  return num
}

function larger(a,b){
  if(a > b){
    return a
  } else{
    return b
  }
}

function largest(arr){
  let num=null
  for(let i = 0;i<arr.length;i++){
    if(arr[i]>num){
      num=arr[i]
    }
  }
  return num
}

function compare(a,b){
  if(JSON.stringify(a)==JSON.stringify(b)){
    return true
  } else{
    return false
  }
}

function addToAll(arr,n){
  for(let i = 0;i<arr.length;i++){
    arr[i]=arr[i]+n
  }
  return arr
}

let remembered=null
function rememberThis(keepsake){
    remembered=keepsake
}

function nArray(n){
  let arr=[]
  for(let i = 1;i<=n;i++){
    arr.push(i)
  }
  return arr
}

function addAllOpt(arr){
  if(typeof arr=='undefined' || arr.length==0){
    return 0
  } else{
    let num=0
    for(let i = 0; i<arr.length;i++){
      num=num+arr[i]
    } 
    return num
  }
}

function divisors(arr,div){
  let newArr=[]
  for(let i = 0; i<arr.length;i++){
    if(arr[i] % div === 0)
    newArr.push(arr[i])
  }
  return newArr
}

function multiples(n,m){
  let arr=[]
  for(let i=1;i<=n;i++){
    arr.push(i*m)
  }
  return arr
}



