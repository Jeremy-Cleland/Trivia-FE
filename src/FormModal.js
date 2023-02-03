import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container, Form, Button } from 'react-bootstrap';
import styles from './FormModal.module.css';
import categories from './Data/triviaCategories.json';

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
              <Form onSubmit={this.props.handleBookSubmit}>
                <Form.Group controlId='Category'>
                  <Form.Label className={styles.formLabel}>Category</Form.Label>
                  <Form.Select>
                    <option value='all'>Random Categories</option>
                    {categories.trivia_categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId='Number of Questions'>
                  <Form.Label className={styles.formLabel}>
                    Number of Questions
                  </Form.Label>
                  <Form.Control type='number' min='1' max='10' />
                </Form.Group>

                <Form.Group controlId='Difficulty Level'>
                  <Form.Label className={styles.formLabel}>
                    Difficulty Level
                  </Form.Label>
                  <Form.Check
                    inline
                    name='difficulty'
                    type='radio'
                    id='All'
                    label='All'
                  />
                  <Form.Check
                    inline
                    name='difficulty'
                    type='radio'
                    id='Easy'
                    label='Easy'
                  />
                  <Form.Check
                    inline
                    name='difficulty'
                    type='radio'
                    id='Medium'
                    label='Medium'
                  />
                  <Form.Check
                    inline
                    name='difficulty'
                    type='radio'
                    id='Hard'
                    label='Hard'
                  />
                </Form.Group>

                <Button className={styles.gameButton1} type='submit'>
                  Submit
                </Button>
              </Form>

              <Button
                className={styles.gameButton2}
                type='button'
                onClick={this.props.handleFetchQuestions}
              >
                Get New Questions
              </Button>
            </Container>
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}

export default FormModal;
