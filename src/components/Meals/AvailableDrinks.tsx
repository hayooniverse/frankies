import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const AvailableDrinks = [
    {
        id: "m1",
        name: "Poland Springs",
        price: 1,
        image: "images/drinksimage/polandsprings.png"
    },
    {
        id: "m2",
        name: "Coke",
        price: 2,
        image: "images/drinksimage/coke.jpg"
    },
    {
        id: "m3",
        name: "Diet Coke",
        price: 2,
        image: "images/drinksimage/dietcoke.jpg"
    },
    {
        id: "m4",
        name: "Sprite",
        price: 2,
        image: "images/drinksimage/sprite.jpg"
    },
    {
        id: "m5",
        name: "Pepsi",
        price: 2,
        image: "images/drinksimage/pepsi.jpg"
    },
    {
        id: "m6",
        name: "Super Coffee",
        price: 4,
        image: "images/drinksimage/supercoffee.jpg"
    },
    {
        id: "m7",
        name: "Orange Juice",
        price: 3,
        image: "images/drinksimage/orangejuice.jpg"
    },
    {
        id: "m8",
        name: "Apple Juice",
        price: 3,
        image: "images/drinksimage/applejuice.jpg"
    },

];

const DrinkList = () => {
  const drinkList = (
    <ul>
      {AvailableDrinks.map((meal) => (
        <MealItem key={meal.id} item={meal} />
      ))}
    </ul>
  );
  return (
    <div className={classes.container}>
      <Card>{drinkList}</Card>
    </div>
  );
};

export default DrinkList;