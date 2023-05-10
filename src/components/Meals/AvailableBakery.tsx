import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const AvailableBakery = [
    {
        id: "b1",
        name: "Chocolate Chip Muffin",
        description: "Muffins with chocolate chips",
        price: 3,
        image: "images/bakeryimage/chocolatechipmuffin.jpg"
    },
    {
        id: "b2",
        name: "Double Chocolate Muffin",
        description: "Chocolate muffins with chocolate chips",
        price: 3,
        image: "images/bakeryimage/doublechocolatemuffin.jpg"
    },
    {
        id: "b3",
        name: "Blueberry Muffin",
        description: "Muffins with sweet blueberry",
        price: 3,
        image: "images/bakeryimage/blueberrymuffin.jpg"
    },
    {
        id: "b4",
        name: "Raisin Muffin",
        description: "Muffins with raisins",
        price: 3,
        image: "images/bakeryimage/raisinmuffin.jpg"

    },
    {
        id: "b5",
        name: "Banana Muffin",
        description: "Muffins with banana seeds",
        price: 3,
        image: "images/bakeryimage/bananamuffin.jpg"

    },
    {
        id: "b6",
        name: "Croissant",
        description: "Soft croissants made with excellent butter",
        price: 4,
        image: "images/bakeryimage/croissant.jpg"

    },
    {
        id: "b7",
        name: "Cookies",
        description: "A pack of 2 chocolate chip cookies and 1 white chocolate with macadmia nuts cookie",
        price: 3,
        image: "images/bakeryimage/cookies.jpg"

    }
];
const BakeryList = () => {
    const bakeryList = (
        <ul>
            {AvailableBakery.map((meal) => (
                <MealItem key={meal.id} item={meal}/>
            ))}
        </ul>
    );
    return (
        <div className={classes.container}>
            <Card>{bakeryList}</Card>
        </div>
    );
};

export default BakeryList;