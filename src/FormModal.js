import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container, Form, Button } from 'react-bootstrap';
import categories from './Data/triviaCategories.json';

class FormModal extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>

          <Modal.Header closeButton>Game Options</Modal.Header>
          <Modal.Body>
            <Container className="mt-5">
              <Form onSubmit={this.props.handleBookSubmit}>

                <Form.Group controlId="Category">
                  <Form.Label>Category</Form.Label>
                  <Form.Select>
                    <option value="all">Random Categories</option>
                    {categories.trivia_categories.map(category => (
                      <option
                        key={category.id}
                        value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="Number of Questions">
                  <Form.Label>Number of Questions</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    max="10" />
                </Form.Group>

                <Form.Group controlId="Difficulty Level">
                  <Form.Label>Difficulty Level</Form.Label>
                  <Form.Check
                    inline
                    name="difficulty"
                    type="radio"
                    id="All"
                    label="All"
                  />
                  <Form.Check
                    inline
                    name="difficulty"
                    type="radio"
                    id="Easy"
                    label="Easy"
                  />
                  <Form.Check
                    inline
                    name="difficulty"
                    type="radio"
                    id="Medium"
                    label="Medium"
                  />
                  <Form.Check
                    inline
                    name="difficulty"
                    type="radio"
                    id="Hard"
                    label="Hard"
                  />
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
