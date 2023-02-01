import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container, Form, Button } from 'react-bootstrap';

class FormModal extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>

          <Modal.Header closeButton></Modal.Header>

          <Modal.Body>
            <Container className="mt-5">
              <Form onSubmit={this.props.handleBookSubmit}>

                <Form.Group controlId="Category">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="checkbox" />
                </Form.Group>

                <Form.Group controlId="Number of Questions">
                  <Form.Label>Number of Questions</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>

                <Form.Group controlId="Difficulty Level">
                  <Form.Label>Difficulty Level</Form.Label>
                  <Form.Control type="radio" />
                </Form.Group>

                <Button type="submit">Submit</Button>

              </Form>

              <Button
                type="button"
                onClick={this.props.handleFetchQuestions}>
                Get New Questions
              </Button>
            </Container>
          </Modal.Body>

        </Modal>
      </>
    );
  }
}

export default FormModal;
