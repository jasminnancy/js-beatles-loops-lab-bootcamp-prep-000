function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
  	array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var counter = 0
  while (counter < facts.length){
    array.push(facts[counter] + "!!!")
    counter++
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  var i = 0
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 7)
  return array
}


