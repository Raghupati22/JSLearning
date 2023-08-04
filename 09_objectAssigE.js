console.log('========================Assignment 2========================');

let sbiBank={
  bankName:"SBI Bank",
  location:"Warje",
  accountNo:"239092033",
  ifsc: "SBI000324234",
  interestRate:"7.8"  ,
  showDetails:function(){
    console.log(`Bank Details is: ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
  }
}

let axisBank={
    bankName:"Axis Bank",
    location:"Aundh",
    accountNo:"239092033",
    ifsc: "AXIS000324234",
    interestRate:"7.8"  ,
    showDetails:function(){
        console.log(`Bank Details is: ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
      }
  }

  let hdfcBank={
    bankName:"HDFC Bank",
    location:"Wakad",
    accountNo:"239092033",
    ifsc: "HDFC000324234",
    interestRate:"7.7"  ,
    showDetails:function(){
        console.log(`Bank Details is: ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
      }
  }
  let yesBank={
    bankName:"YES Bank",
    location:"Shivane",
    accountNo:"239092033",
    ifsc: "YES000324234",
    interestRate:"7.1" ,
    showDetails:function(){
        console.log(`Bank Details is: ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
      } 
  }


  sbiBank.showDetails();
  axisBank.showDetails();
  hdfcBank.showDetails();
  yesBank.showDetails();