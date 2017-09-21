function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n){
  var ranked_lists = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < ranked_lists.length; i++){
    ranked_lists[i].innerHTML = parseInt(ranked_lists[i].innerHTML) + n;
  }
}
