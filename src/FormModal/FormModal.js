import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container, Form, Button } from 'react-bootstrap';
import styles from './FormModal.module.css';
import categories from '../Data/triviaCategories.json';

class FormModal extends React.Component {
  render() {
    return (
      <Container>
        <Modal
          className={styles.modal}
          centered
          show={this.props.showModal}
          onHide={this.props.handleCloseModal}
        >
          <Modal.Header className={styles.header} closeButton>
            <Modal.Title>Game Options</Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.body}>
            <Container className={styles.innerbody}>
              <Form onSubmit={this.props.handleFetchQuestions}>
                <Form.Group controlId='category'>
                  <Form.Label className={styles.formLabel}>
                    Category
                  </Form.Label>
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

                <Form.Group controlId="numberOfQuestions">
                  <Form.Label className={styles.formLabel}>
                    Number of Questions
                  </Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    max="10"
                    defaultValue="5" />
                </Form.Group>

                <Form.Group controlId="difficultyLevel">
                  <Form.Label className={styles.formLabel}>
                    Difficulty Level
                  </Form.Label>
                  <Form.Check
                    inline
                    defaultChecked
                    name="difficulty"
                    type="radio"
                    value="all"
                    label="All"
                  />
                  <Form.Check
                    inline
                    name="difficulty"
                    type="radio"
                    value="easy"
                    label="Easy"
                  />
                  <Form.Check
                    inline
                    name="difficulty"
                    type="radio"
                    value="medium"
                    label="Medium"
                  />
                  <Form.Check
                    inline
                    name="difficulty"
                    type="radio"
                    value="hard"
                    label="Hard"
                  />
                </Form.Group>

                <Button
                  className={styles.gameButton1}
                  type='submit'
                >
                  Submit
                </Button>
              </Form>

            </Container>
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}

export default FormModal;
