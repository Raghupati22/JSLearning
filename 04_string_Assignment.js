function stringBasics()
{
    console.log(`"My Dream company is " Amdocs`);
    var hobby1="Reading Books";
    var hobby2="Listining Music";
    var hobby3="Playing Cricket";
    console.log(`My Hobbies are : ${hobby1} , ${hobby2} , ${hobby3}`);
    
    var hobby1Length=hobby1.length;
    var hobby2Length=hobby2.length;
    var hobby3Length=hobby3.length;
    var totalNumberOfChar=hobby1Length+hobby2Length+hobby3Length;
    console.log(`Sum of Total Number of Character in Hobby 1, 2 & 3 are : ${totalNumberOfChar}`);
}
stringBasics();