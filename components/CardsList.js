import Card from "./Card";

function CardsList({ robots }) {
  return (
    <div>
      {robots.map((robot, i) => (
        <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
      ))}
    </div>
  );
}

export default CardsList;
