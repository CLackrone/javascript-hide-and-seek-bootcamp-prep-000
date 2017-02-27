function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = lis.length; i < l; i++ ) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + parseInt(n)
  }
}

function deepestChild() {
  var node = document.getElementById('grand-node').querySelectorAll('div')
  var child
  for (let i = 0, l = node.length; i < l; i++) {
    if(node[i].querySelector('div'))
    child = node[i]
  }
  return child
}
