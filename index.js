const app = "I don't do much.";
var arrayKitten=kittens.slice();
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
};
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
};
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
};
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
};
function appendKitten(name){
  return arrayKittens.push();
};
function prependKitten(name){

};
function removeLastKitten(){
  var remLast=kittens.slice(kittens.length -1);
  return remLast;
};
function removeFirstKitten(){
  var remFirst=kittens.slice(0);
  return remFirst;
};
