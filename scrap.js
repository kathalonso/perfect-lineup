/*Another cool pattern you often see with higher order functions is function reuse. 
Let's take a list of people, the chores they completed, and how long was spent on the chores. 
We want to use what we've learned map(), filter(), and reduce(), to create a minutesSpentByPerson() 
function that will allow us to get the total number of minutes an individual spent doing chores. 
This function will take our list of objects and the person for whom we want the total minutes. 
We can chain together filter(), map(), and reduce() to arrive at this answer pretty easily. */
const chores = [
    { name: 'Erase blackboard', doneBy: 'Jamal', minutes: 6 },
    { name: 'Take the trash out', doneBy: 'Ashley', minutes: 3 },
    { name: 'Sweep up', doneBy: 'Casey', minutes: 14 },
    { name: 'Feed the guinea pig', doneBy: 'Jamal', minutes: 8 },
  ]
  
function minutesSpentByPerson(chores, person) {
    return chores
      .filter((chore) => chore.doneBy === person)
      .map((chore) => chore.minutes)
      .reduce((total, minutes) => total + minutes, 0)
  }
/*Now let's create for ourselves a minutesSpentByChore() function. This function will take an 
array of objects and the name of a chore, returning the total minutes everyone spent on that chore. 
This will be a very easy function to write since it will behave almost identically to minutesSpentByPerson().
 */

function minutesSpentByChore(chores, name) {
    return chores
      .filter((chore) => chore.name === name)
      .map((chore) => chore.minutes)
      .reduce((total, minutes) => total + minutes, 0)
  }
  
  console.log(minutesSpentByPerson(chores, 'Jamal'))
  console.log(minutesSpentByChore(chores))

  /* As we can see here, the bodies of minutesSpentByPerson() and minutesSpentByChore() are almost identical. 
  This isn't very DRY. Let's go ahead and DRY these up by creating an underlying function that they rely on. 
  As we can see, the only difference between these two functions is the predicate being used in the filter(). 
  Let's take advantage of our higher order function pattern here to extract out the body of these functions 
  into a minutesSpent() function which will work for either function. We can do this by assuming we will be 
  passed the appropriate predicate function.*/

  function minutesSpent(chores, predicate) {
    return chores
      .filter(predicate)
      .map((chore) => chore.minutes)
      .reduce((total, minutes) => total + minutes, 0)
  }
  
  function minutesSpentByPerson(chores, person) {
    return minutesSpent(chores, (chore) => chore.doneBy === person)
  }
  
  function minutesSpentByChore(chores, name) {
    return minutesSpent(chores, (chore) => chore.name === name)
  }
  
  /*Now with minutesSpent() available to us, both minutesSpentByChore() and minutesSpentByPerson() are simply calls 
  to minutesSpent(), passing it the predicate function needed for that particular implementation. This leaves us with 
  a much cleaner and more maintainable code base.*/



  let teamCount = lineup.reduce((teams, player) => {
    // teams[player.teamId] = teams[player.teamId] === undefined ? 1 : teams[player.teamId] + 1
    
    if(teams[player.teamId] === undefined){
        teams[player.teamId] = 1
    } else {
        teams[player.teamId] += 1
    }
    return teams
 }, {});


 ------------------------------------------------------------

 function validateLineup(lineup) {
  let sumSalary = lineup.reduce((acc, val) => acc + val.salary, 0);
  if (sumSalary >= 45000) {
      return false;
  };

  }
  let teamCount = lineup.reduce((teams, player) => {
      teams[player.teamId] = teams[player.teamId] === undefined ? 1 : teams[player.teamId] + 1
      return teams;
   }, {});
  let teamCountValues = Object.values(teamCount);
  for (let i = 0; i < teamCountValues.length; i++) {
      if (teamCountValues[i] > 2) {
          return false; 
      }
  }

  let gameCount = lineup.reduce((games, player) => {
      games[player.gameId] = games[player.gameId] === undefined ? 1 : games[player.gameId] + 1
      return games;
  }, {});
  let gameCountValues = Object.values(gameCount);
  for (let i = 0; i < gameCountValues.length; i++) {
      if (gameCountValues[i] > 3) {
          return false; 
      }
  }

  if (lineup.length > 9){
      return false;
  }

  let positionCount = lineup.reduce((positions, player) => {
      positions[player.position] = positions[player.position] === undefined ? 1 : positions[player.position] + 1
      return positions;
  }, {});
  if (positionCount['P'] != 1 || positionCount['C'] != 1 || positionCount['1B'] != 1 || positionCount['2B']!= 1 
          || positionCount['3B']!= 1 || positionCount['SS'] != 1 || positionCount['OF'] != 3) {
      return false;
  }

  return true
}

module.exports = validateLineup


//object.values
//.some
//ternary 
// reduce with empty object/array as initial val
// create new property w/bracket notation
//JC's last lecture min 45:00
//filter