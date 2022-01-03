import Card from "./card.jsx";
import Rating from "./rating.jsx";

function Listmovies(props) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-around",
        backgroundColor: "withe",
      }}
    >
      {props.moviedata
        .filter((el) =>
          el.title.toUpperCase().includes(props.Search.toUpperCase()) && props.newRating <= el.rate
        )
        .map((el) => (
          <Card el={el}></Card>
        ))}
    </div>
  );
}

export default Listmovies;
