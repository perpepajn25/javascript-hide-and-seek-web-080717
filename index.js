function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  var divArray = document.querySelector('#grand-node').querySelectorAll('div');
  return divArray[divArray.length-1]
}

function increaseRankBy(n){
  var rankedLists = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < rankedLists.length; i++){
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }
}
