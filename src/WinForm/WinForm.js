import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  width: 400px;
`;

const InputField = styled.input`
  width: 300px;
  margin: 5px;
  padding: 4px 10px;
  color: black;
  border: 2px solid black;
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
  font-size: 16px;
  outline: none;
  background: #fff;
`;

const Button = styled.button`
  margin: 20px;

  &:hover {
    background: rgba(72, 172, 222, 0.75);
  }
`;

class WinForm extends Component {

  componentDidMount() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwVah63WBxyXzNi9gWwzxSeIeSBUbgQPykEGQDAH4N5pBeYE6Ix/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
  }

  render() {
    return (
      <Container>
        <h2>You Won!</h2>
        <h4>Enter your details below to be entered in the prize draw</h4>
        <form name="submit-to-google-sheet">
          <InputField name="email" type="email" placeholder="Email" required></InputField>
          <InputField placeholder="License # or Category"></InputField>
          <Button className="button" type="submit">Enter Competition</Button>
        </form>
      </Container>
        )
      }
    }

export default WinForm;