var dateOfWeek = function (day) {
  switch (day) {
    case 1:
      console.log(`${day} - Monday`);
      console.log('Monday is start of the week');
      break;
    case 2:
      console.log(`${day} - Tuesday`);
      break;
    case 3:
      console.log(`${day} - Wed`);
      break;
    case 4:
      console.log(`${day} - Thur`);
      break;
    case 5:
      console.log(`${day} - Friday`);
      console.log('Friday is sometime half holiday for working professionals');
      break;
    case 6:
      console.log(`${day} - Sat`);
      console.log('Saturday is the Holiday');
      break;
    case 7:
      console.log(`${day} - Sunday`);
      console.log('Sunday is the Holiday');
      break;

    default:
        console.log(`${day} - Invalid Input`);
        console.log('Please provide valid data');
      break;
  }
  console.log('========End of Switch of Case=======');
};
dateOfWeek(2);
dateOfWeek(7);
dateOfWeek(4);
dateOfWeek(9);
dateOfWeek(100);
dateOfWeek(null);
dateOfWeek(undefined);
dateOfWeek("GK");
