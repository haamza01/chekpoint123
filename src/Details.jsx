import React from "react";
import { Card , Button} from "react-bootstrap";

function Details(props) {
  console.log(props)
  const Found = props.moviedata.find(el => el.id == props.match.params.id)
 
  return (
    <div className="cards">
      <Card className="carddet" border="primary" style={{ width: "18rem" , Display:'flex'     ,  justifyContent:'center' , backgroundColor:'black' }}>
        <Card.Header style={{color : 'green', backgroundColor:'white'}}>Details</Card.Header>
        <Card.Body>
        <Card.Title style={{color : 'gold'}}> {Found.title}   </Card.Title>
          <img src= {Found.posterUrl} alt=""   style={{width:'80%', borderRadius:'15px' , marginTop:'20px'}}   />
          <Card.Text  style={{marginTop:'20px', color:'white'}} > {Found.description} </Card.Text>

          <iframe className="youtube" width="260" height="200" src={Found.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Button variant="success" style={{marginTop:'20px', marginBottom:'20px'}}   onClick={()=> props.history.goBack()}>Go back</Button>
        </Card.Body>
        
        <Button variant="success"  onClick={()=>props.history.push('/')}>Go home</Button>
        
      </Card>
     
    </div>
  );
}
export default Details;
