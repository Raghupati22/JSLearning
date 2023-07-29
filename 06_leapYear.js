console.log("====================Assignment 3 =============================");
var leapYear=function(year){
    var yearValue= +year;
   if (isNaN(yearValue)) {
    console.log(`${year} - Invalid Data`);
   }
   else
   {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
     {
       console.log(`${year} - This year is leap year`);
     }
     else
     {
        console.log(`${year} - This year is not leap year`);
     }
    }
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);
