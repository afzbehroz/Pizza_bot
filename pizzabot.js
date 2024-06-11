const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

function checkOrderName(orderName) {
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

function placeOrder() {
  const orderName = document.getElementById("pizzaType").value;
  const orderQuantity = parseInt(document.getElementById("pizzaQuantity").value);

  if (checkOrderName(orderName)) {
    const orderTotal = totalCost(orderQuantity);
    const orderCookingTime = cookingTime(orderQuantity);
    document.getElementById("orderResult").innerText =
      "Great, I'll get started on your " +
      orderName +
      " right away. It will cost " +
      orderTotal +
      " kr. The pizzas will take " +
      orderCookingTime +
      " minutes.";
  } else {
    document.getElementById("orderResult").innerText =
      "Sorry, we don't have " + orderName + " on the menu.";
  }
}


/*
alert(
  "Hey! Happy to serve your pizza. On our menu we have vegetarian, hawaiian and pepperoni"
);
const orderName = prompt(
  "Enter the name of the pizza you want to order today."
);
if (
  orderName === "Vegetarian Pizza" ||
  orderName === "Hawaiian Pizza" ||
  orderName === "Pepperoni Pizza"
) {
  alert("You have ordered a " + orderName + " Thank you for ordering!");
  const orderQuantity = prompt("How many of " + orderName + " do you want?");
  const orderTotal = orderQuantity * pizzaPrice;
  let cookingTime;
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    cookingTime = 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    cookingTime = 15;
  } else {
    cookingTime = 20;
  }
  alert(
    "Great, I'll get started on your " +
      orderName +
      " right away, it will cost " +
      orderTotal +
      " kr. Your Pizza will be ready in " +
      cookingTime +
      " minutes."
  );
} else {
  alert("Sorry, we dont have." + orderName);
}





/*if (
  orderName === "Vegetarian Pizza" ||
  orderName === "Hawaiian Pizza" ||
  orderName === "Pepperoni Pizza"
) {
  alert("You have ordered a " + orderName + " Thank you for ordering!");
  const orderQuantity = prompt("How many of " + orderName + " do you want?");
  const orderTotal = orderQuantity * pizzaPrice;
 
  alert(
    "Great, I'll get started on your " +
      orderName +
      " right away, it will cost " +
      orderTotal +
      " kr"
  );
} else {
  alert("Sorry, we don't have " + orderName + " on the menu.");
}
*/
