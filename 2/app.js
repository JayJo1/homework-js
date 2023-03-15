const Starbucks = {
    coffee: {
      americano: "Классический кофе на основе эспрессо, обычно подаётся в больших чашках",
      latte: "Кофе с молоком, эспрессо вливается сверху молока, обычно подаётся в высоких стаканах",
      cappuccino: "Кофе с молоком и воздушной пенкой, обычно подаётся в маленьких чашках",
      espresso: "Крепкий кофе на основе эспрессо, обычно подаётся в маленьких чашках"
    },
    tea: {
      black: "Черный чай, который можно пить с молоком и сахаром",
      green: "Зеленый чай, который можно пить без добавок",
      herbal: "Травяной чай, который можно пить как горячим, так и холодным"
    }
  };
  function takeOrder(beverage) {
    
    if (Starbucks.coffee.hasOwnProperty(beverage)) {
      console.log(`Ваш заказ: ${beverage}. Описание: ${Starbucks.coffee[beverage]}`);
    } else if (Starbucks.tea.hasOwnProperty(beverage)) {
      console.log(`Ваш заказ: ${beverage}. Описание: ${Starbucks.tea[beverage]}`);
    } else {
      console.log(`Извините, напиток ${beverage} не найден.`);
    }
  }
  
  
  takeOrder("americano"); 
  takeOrder("chai");