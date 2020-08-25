let DateHelpers = {
  getArrayOfCurrentAndNextThreeMonths: () => {
    
    //helpers
    var monthsHash = { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" }

    var today = new Date();

    // returns year as number, i.e. 2020
    var yyyy0 = today.getFullYear();
    var yyyy1 = yyyy0;
    var yyyy2 = yyyy0;
    var yyyy3 = yyyy0; 

    // returns current month as a number
    //var mm = Number(String(today.getMonth() + 1).padStart(2, '0'));
    var mm = today.getMonth() + 1;

    // returns months as a string, i.e "Jan"
    var mm0 = monthsHash[mm]; 
    var mm1 = monthsHash[mm + 1]; 
    var mm2 = monthsHash[mm + 2];
    var mm3 = monthsHash[mm + 3];

    // updating years
    if (mm0 === 'Oct') { yyyy3 = yyyy0 + 1 };
    if (mm0 === 'Nov') { 
      yyyy2 = yyyy0 + 1;
      yyyy3 = yyyy0 + 1
    };
    if (mm0 === 'Dec') { 
      yyyy1 = yyyy0 + 1;
      yyyy2 = yyyy0 + 1;
      yyyy3 = yyyy0 + 1; 
    };

    // returns an array of 4 consecutive months as strings, i.e. ["Jan 2020", "Feb 2020", "Mar 2020", "Apr 2020"]
    var result = [`${mm0} ${yyyy0}`, `${mm1} ${yyyy1}`, `${mm2} ${yyyy2}`, `${mm3} ${yyyy3}`]
    return result;
  }
}

module.exports = DateHelpers;