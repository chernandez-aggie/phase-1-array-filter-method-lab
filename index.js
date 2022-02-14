// Code your solution here
/*function findMatching(list, match){
   let newArray = list.filter(function(driverName){
       return driverName === match;
   })
   return newArray;
}*/

function findMatching(list, match){
    return list.filter(element => element.toUpperCase() === match.toUpperCase());
}

function fuzzyMatch(list, match){
    return list.filter(element => element.charAt(0) === match.charAt(0));
}

function matchName(list, match){
    return list.filter(element => element.name === match);
}