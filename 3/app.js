var drinks = ["milk ","beer" , "beer" , "milk", "milk"];
var alcohol = ["beer"]
for(var i =0; i <drinks.length; i++){
    if(alcohol.includes(drinks[i].toLowerCase())){
        console.log(`bad`);
        continue
    }
    console.log(`good `)
}