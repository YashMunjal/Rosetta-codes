function getFinalOpenedDoors(numDoors) {
  // Good luck!
var arr=new Array();
for(var i=1;i<=Math.sqrt(numDoors);i++)
{
  arr.push(i);
}

  return arr.map(x=>x*x);
}
