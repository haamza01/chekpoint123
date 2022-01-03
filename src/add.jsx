import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

function Add(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [posterimg, setposterimg] = useState("");
  const [rate, setrate] = useState("");
  const [trailer, settrailer] = useState("");

  const [text, setText] = useState("");

  const [searchTerm, setSearchTerm] = React.useState("");
  

  const Adding = () => {
    props.setmoviedata([
      ...props.moviedata,
      {
        id: Math.random(),
        title,
        posterUrl:posterimg,
        rate,
        description,
         
        trailer,
      },
    ]);
  };

  


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        ADD FILM/SERIE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Films</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label> image : </label>
          <input
            onChange={(e) => setposterimg(e.target.value)}
            value={posterimg}
          />{" "}
          <br /> <hr />
          <label> title  </label>
          <input
            onChange={(e) => settitle(e.target.value)}
            value={title}
          />{" "}
          <br /> <hr />
          <label>descripton : </label>
          <input
            onChange={(e) => setdescription(e.target.value)}
            value={description}
          />{" "}
          <br /> <hr />
          <label>rate  </label>
          <input onChange={(e) => setrate(e.target.value)} value={rate} />{" "}
          <br /> <hr />
          <label>Trailer </label>
          <input onChange={(e) => settrailer(e.target.value)} value={trailer} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="primary" onClick={  ()=>{  Adding() ;handleClose()   } }>
            Save Changes
          </Button>
          
        </Modal.Footer>
      </Modal>

      </div>

  );
}

export default Add;
