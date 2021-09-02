import { useState } from "react";
import { Form, Container, Button, Row, Col, Alert } from "react-bootstrap";

const Registration = () => {
  const [userRegistration, setUserRegistration] = useState({
    name: "",
    surName: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [nameError, setNameError] = useState("");
  const [surNameError, setSurNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const saveUserDetails = (e) => {
    e.preventDefault();

    if (userRegistration.password1.length < 5) {
      setPasswordOne("password must contain atleast 5 character longg ");

      console.log(passwordOne);
    }
    if (userRegistration.password1 !== userRegistration.password2) {
      setPasswordOne("The Two passwords should be the same");
    }
    if (userRegistration.password2.length < 5) {
      setPasswordTwo("password must contain atleast 5 character long");
    }

    let emailVal = e.target[2].value;
    if (emailVal !== "undefined") {
      let lastAtPos = emailVal.lastIndexOf("@");
      let lastDotPos = emailVal.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          emailVal.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          emailVal.length - lastDotPos > 2
        )
      ) {
        setEmailError("Email is not valid");
      }
    }
    if (userRegistration.name.length < 2) {
      setNameError("Name must be tleat 2 Char long");
    }
    if (userRegistration.surName.length < 3) {
      setSurNameError("Surname must atleast 3 Char long");

      console.log(e.target[1].value.length);
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ textAlign: "center" }}>Create an Account</h1>
          <Form onSubmit={saveUserDetails}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                value={userRegistration.name}
                onChange={(e) =>
                  setUserRegistration({
                    ...userRegistration,
                    name: e.target.value,
                  })
                }
              />
              {nameError && <Alert variant="danger">{nameError}</Alert>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                value={userRegistration.surName}
                onChange={(e) =>
                  setUserRegistration({
                    ...userRegistration,
                    surName: e.target.value,
                  })
                }
                placeholder="Your Family Name"
              />
              {surNameError && <Alert variant="danger">{surNameError}</Alert>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={userRegistration.email}
                onChange={(e) =>
                  setUserRegistration({
                    ...userRegistration,
                    email: e.target.value,
                  })
                }
                placeholder="Enter email"
              />
              {emailError && <Alert variant="danger">{emailError}</Alert>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={userRegistration.password1}
                onChange={(e) =>
                  setUserRegistration({
                    ...userRegistration,
                    password1: e.target.value,
                  })
                }
                placeholder="Create Password"
              />
              {passwordOne && <Alert variant="danger">{passwordTwo}</Alert>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password Again"
                value={userRegistration.password2}
                onChange={(e) =>
                  setUserRegistration({
                    ...userRegistration,
                    password2: e.target.value,
                  })
                }
              />
              {passwordOne && <Alert variant="danger">{passwordOne}</Alert>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      {userRegistration && <h1>{userRegistration.name}</h1>}
      <h1>{userRegistration.surName}</h1>
      <h1>{userRegistration.email}</h1>
      <h1>{userRegistration.password1}</h1>
      <h1>{userRegistration.password2}</h1>
    </Container>
  );
};
export default Registration;
