import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const AvailableFood = [
    {
        id: "f1",
        name: "Salmon Teriyaki",
        description: "Salmon teriyaki over rice. Served with steamed vegetables.",
        price: 7,
        image: "images/foodimage/salmonteriyaki.jpg",
        stock: 10
    },
    {
        id: "f2",
        name: "Spicy Chicken Sandwich",
        description: "A sandwich with a fried spicy chicken, veggies, and a choice of swiss of provolone cheese",
        price: 6,
        image: "images/foodimage/spicychickensandwich.png",
        stock: 10
    },
    {
        id: "f3",
        name: "Ham and Cheese Sandwich",
        description: "A sandwich with ham, veggies, and a choice of swiss of provolone cheese",
        price: 6,
        image: "images/foodimage/hamandcheesesandwich.jpg",
        stock: 10
    },
    {
        id: "f4",
        name: "Stuffed Shell",
        description: "Stuffed shell served in tomato sauce, topped with mozzarella cheese",
        price: 6,
        image: "images/foodimage/stuffedshell.jpg",
        stock: 10
    },
    {
        id: "f5",
        name: "Korean BBQ",
        description: "Korean BBQ over rice. Served with steamed vegetables.",
        price: 7,
        image: "images/foodimage/koreanbbq.jpg",
        stock: 10
    },
    {
        id: "f6",
        name: "Garlic Salmon",
        description: "Garlic salmon over rice. Served with steamed vegetables.",
        price: 7,
        image: "images/foodimage/garlicsalmon.jpg",
        stock: 10
    },
    {
        id: "f7",
        name: "Cheese Burger",
        description: "Cheese burger with vegetables and pickles. Served with fries.",
        price: 6,
        image: "images/foodimage/cheeseburger.jpg",
        stock: 10
    },
    {
        id: "f8",
        name: "Fruit Box",
        description: "A box of assorted fruits, including berries, grapes, melon, oranges, and pineapple.",
        price: 4,
        image: "images/foodimage/Fruit Box.jpg",
        stock: 10
    },
    {
        id: "f9",
        name: "Bagles with Cream Cheese",
        description: "Toasted bagels with plain cream cheese",
        price: 6,
        image: "images/foodimage/bagelwithcreamcheese.jpg",
        stock: 10
    },
];
const FoodList = () => {
    const foodList = (
        <ul>
            {AvailableFood.map((meal) => (
                <MealItem key={meal.id} item={meal}/>
            ))}
        </ul>
    );
    return (
        <div className={classes.container}>
            <Card>{foodList}</Card>
        </div>
    );
};

export default FoodList;