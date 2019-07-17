// add solution here
function theBeatlesPlay(musicians, instruments) {
  var intros = [];
  for (var i = 0; i < musicians.length; i++) {
    intros.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return intros;
}

function johnLennonFacts(facts) {
  var counter = facts.length;
  var result = [];
  while (counter >= 0) {
    result.push(`${facts[counter-1]}!!!`);
    counter --;
  }
  return result;
}
