import classes from "./Card.module.scss";

const Card = (props: any) => {
  return (
    <div className={classes.card}>
      <div className={classes.grid}>{props.children}</div>
    </div>
  );
};

export default Card;