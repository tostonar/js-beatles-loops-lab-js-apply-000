// add solution here
function theBeatlesPlay(musicians, instruments) {
  var intros = [];
  for (var i = 0; i < musicians.length; i++) {
    intros.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return intros;
}
