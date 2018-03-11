import React from 'react';
import styled from 'styled-components';

const color = {
  main: '#fff498',
  text: {
    main: '#fff',
    sub: 'red'
  }
};

const gutter = {
  def: '1.5rem'
};

const radius = '1rem';
const
  App = styled.div`
    background-color: ${color.main};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${gutter.def}
  `,

  Input = styled.div`
    width: 100%;
    input {
      outline: none;
      width: 100%;
      height: 3rem; 
      background-color: #999;
      border: 0;
      margin-bottom: ${gutter.def};
      color: ${color.text.main};
      border-radius: ${radius};
      &:hover {
        border: solid #000;
      }
    }
  `,

  Button = styled.div`
  width: 100%;
  button, a, input {
    border-radius: ${radius};
    height: 3rem;
    background-color: red;
    width: 100%;
    display: block;
    text-align: center
    padding: 0 ${gutter.def}
    line-height: 1.8rem;
  }
  `;

export {App, Input, Button};