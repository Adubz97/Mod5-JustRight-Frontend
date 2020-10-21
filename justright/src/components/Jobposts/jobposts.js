import React from "react";
import JobpostCard from "./jobpostCard.js"
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  CardColumns,
  Card
} from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import CreateJobPost from "./createjobpost.js"

function JobPosts(props) {

  const [modalShow, setModalShow] = React.useState(false);


    return (
      <div>
        <MDBBtn
          rounded
          color="indigo"
          style={{ position: "absolute", left: "2080px", top: "75px" }}
          onClick={() => setModalShow(true)}
        >
          Create a job post
        </MDBBtn>{" "}
        <CreateJobPost
          show={modalShow}
          onHide={() => setModalShow(false)}
          addJobPost={props.addJobPost}
        />
        <div class="main">
          <h2 style={{ position: "absolute", left: "1115px", top: "75px" }}>
            Jobposts
          </h2>
          <br />
          <br />
          <CardColumns
            style={{
              width: "700px",
              gridTemplateColumns:
                "auto auto auto auto auto auto auto auto auto auto",
              display: "grid",
              position: "absolute",
              left: "240px",
            }}
          >
            {props.AllJobposts.map((jobpost) => (
              <JobpostCard
                // style={{ flex: 1 }}
                jobpost={jobpost}
                key={jobpost.id}
              />
            ))}
          </CardColumns>
        </div>
      </div>
    );

}
export default JobPosts;