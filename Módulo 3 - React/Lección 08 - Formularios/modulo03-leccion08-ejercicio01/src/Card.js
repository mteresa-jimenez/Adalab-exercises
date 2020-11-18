import "./App.css";

const Card = (props) => {
  return (
    <>
      {/* bajo el objeto que hay en el estado (en App) y busco el value */}
      <p className="paragraph">{props.stateFilm.value}</p>
    </>
  );
};

export default Card;
