function validateLineup(lineup) {
    let sumSalary = lineup.reduce((acc, val) => acc + val.salary, 0);
    if (sumSalary >= 45000) {
        return false;
    };
    function reducePlayerProperty(property){
        return lineup.reduce((acc, player) => {
            acc[player[property]] = acc[player[property]] === undefined ? 1 : acc[player[property]] + 1
            return acc;
        }, {});
        
    }
    let teamCount = reducePlayerProperty('teamId');
    let teamCountValues = Object.values(teamCount);
    for (let i = 0; i < teamCountValues.length; i++) {
        if (teamCountValues[i] > 2) {
            return false; 
        }
    }
    let gameCount = reducePlayerProperty('gameId');
    let gameCountValues = Object.values(gameCount);
    for (let i = 0; i < gameCountValues.length; i++) {
        if (gameCountValues[i] > 3) {
            return false; 
        }
    }
    let positionCount = reducePlayerProperty('position');
    if (positionCount['P'] != 1 || positionCount['C'] != 1 || positionCount['1B'] != 1 || positionCount['2B']!= 1 
            || positionCount['3B']!= 1 || positionCount['SS'] != 1 || positionCount['OF'] != 3) {
        return false;
    }
    if (lineup.length > 9){
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