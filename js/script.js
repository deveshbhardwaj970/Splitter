function fun(tip){
    console.log(tip)
    var bill = document.getElementById("bill").value;
    var bill = Number(bill);;
    console.log(bill);
    var persons = document.getElementById("persons").value;
    var persons = Number(persons);
    console.log(persons);

    var tip_amt = ((bill*tip)/100);
    tip_amt = Number(tip_amt.toFixed(2));
    var tip_amt_p = ((bill*tip)/100)/persons;
    tip_amt_p = tip_amt_p.toFixed(2);
    console.log(tip_amt_p);

    var totl = (bill/persons)+Number(tip_amt_p);
    totl = totl.toFixed(2);
    console.log(totl);

    if(bill>0 && persons>0){
        document.getElementById("tip_amt").innerHTML = tip_amt_p;
        document.getElementById("totl").innerHTML = totl;
    }
    else if(bill<=0 && persons>0){
        document.getElementById("tip_amt").innerHTML = tip_amt_p;
        document.getElementById("totl").innerHTML = totl;
    }
    else if(bill>0 && persons<=0){
        document.getElementById("tip_amt").innerHTML = tip_amt.toFixed(2);
        document.getElementById("totl").innerHTML = (bill+tip_amt).toFixed(2);
    }
    else if(bill<=0 && persons<=0){
        document.getElementById("tip_amt").innerHTML = "0.00";
        document.getElementById("totl").innerHTML = "0.00";
    }
    
    
}


