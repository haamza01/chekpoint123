import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Router , Link  } from "react-router-dom";

function Listmovies({ el }) {
  return (
    <div>
      <Card className="carddd" style={{width: "18rem" , marginTop: "50px", height:'65rem', }}>
        <Card.Img className="imgg" variant="top" src={el.posterUrl} style={{borderRadius:'15px', width:'80%', textAlign:'center'}} />
        <Card.Body>
          <Card.Title style={{color:'gold'}}>{el.title}</Card.Title>
          <Card.Text  style={{color:'white'}}>{el.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <Card.Title style={{color:'gold'}}>ID</Card.Title>
          <ListGroupItem style={{color:'white',backgroundColor:'black'}}>{el.id}</ListGroupItem>
          <Card.Title style={{color:'gold'}}>RATE</Card.Title>
          <ListGroupItem style={{color:'white',backgroundColor:'black'}}>{el.rate}</ListGroupItem>
          <iframe className="youtube" style={{borderRedus:'15px'}} width="280" height="230" src={el.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </ListGroup>
        <Link to=  {`/Details/${el.id}`} >
          {" "}
          <Button className="btndet" variant="success">MORE DETAILS</Button>{" "}
        </Link>
      </Card>
    </div>
  );
}

export default Listmovies;
