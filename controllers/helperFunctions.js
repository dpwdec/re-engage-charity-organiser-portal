
var helperFunction = {
  
}

helperFunction.getArrayOfCurrentAndNextThreeMonths = () => {
  
  //helpers
  var today = new Date();
  var yyyy0 = today.getFullYear();  // returns year as number, i.e. 2020
  // returns current month as a number
  var mm = Number(String(today.getMonth() + 1).padStart(2, '0'));

  var monthsHash = { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" }

  // returns months as a string, i.e "Jan"
  var mm0 = monthsHash[Number(String(today.getMonth() + 1).padStart(2, '0'))]; 
  var mm1 = monthsHash[mm + 1]; 
  var mm2 = monthsHash[mm + 2];
  var mm3 = monthsHash[mm + 3];

  var yyyy1 = yyyy0; 
  var yyyy2 = yyyy0;
  var yyyy3 = yyyy0;

  // updating years 
  if (mm0 === 'Oct') { yyyy3 = (yyyy0 + 1) } 
  if (mm0 === 'Nov') {
    yyyy2 = (yyyy0 + 1)
    yyyy3 = (yyyy0 + 1)
  } 
  if (mm0 === 'Dec') {
    yyyy1 = (yyyy0 + 1)
    yyyy2 = (yyyy0 + 1)
    yyyy3 = (yyyy0 + 1)
  } 


  // returns an array of 4 consecutive months as strings, i.e. ["Jan 2020", "Feb 2020", "Mar 2020", "Apr 2020"]
  var result = [`${mm0} ${yyyy0}`, `${mm1} ${yyyy1}`, `${mm2} ${yyyy2}`, `${mm3} ${yyyy3}`];

  return result;
};

helperFunction.getCurrentYearAsNumber = () => {
  var today = new Date();
  var yyyy = today.getFullYear();
  
  console.log(yyyy)
  return yyyy;
}

helperFunction.getCurrentMonthAsNumber = () => {
  var today = new Date();
  var mm = Number(String(today.getMonth() + 1).padStart(2, '0')); //January is 0!

  console.log(mm)
  return mm; 
}


helperFunction.getCurrentMonthAsString = (monthAsNumber) => {
  var months = {
    1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 
    7: "Jul", 8: "Aug", 9: "Sept", 10: "Oct", 11: "Nov", 12: "Dec"
  }
  console.log(months[monthAsNumber])
  return months[monthAsNumber]
}

module.exports = helperFunction