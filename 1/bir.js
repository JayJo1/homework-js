var word1 = prompt(  "Введите ваше имя");
var word2 = prompt(  "Введите вашу фамилию");
var age = Number(prompt( "Введите ваш возраст"));
if(age <= 18){
    console.log("Здарова",word1);
}
else if(age >= 19 && age <= 50){
    console.log("Здравствуйте", word1 +" "+ word2);
}

    else if(age >= 51 && age <= 90 ){
        console.log("Здравствуйте многоуважаемый(-ая)",word1 + " "+ word2 );
    }
            else{
                console.error("что то пошло не так")
                }