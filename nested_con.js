
var  danishPrice =300;
var butterPrice= 150;
var toastPrice =600;
var myBudget =400;
var packedWell =false;

// if((danishPrice<myBudget)&&(toastPrice<myBudget)&&(butterPrice<myBudget) && myBudget>toastPrice<butterPrice<danishPrice){
//     console.log('sob niye aye')
// }

// else if((danishPrice<myBudget)&& (toastPrice+butterPrice)<danishPrice<myBudget){
//     console.log("danish khabo")
// }

// else if(butterPrice<myBudget && butterPrice<danishPrice){

// console.log("butter khabo")
// }
// else if((toastPrice<myBudget) && (toastPrice<butterPrice)&&(toastPrice<danishPrice)){
//     console.log("toast khabo")
// }

// else{
//     console.log("need money")
// }

if (danishPrice<myBudget){
    if(packedWell==true){
        console.log("danish khabo")

    }

    else {
        console.log("masi ase")
    }
}

else{
    console.log("onno")
}