import React from 'react';
import styled from 'styled-components';

const color = {
  white: '#fff',
  black: '#000',
  background: '#fff498',
  yellow: '#ffca48',
  blue: '#5492bc',
  orange: '#e8643e',
  gray: '#e8e8e8',
};

const fontSize = {
  sm: '1.2rem',
  md: '1.6rem',
  lg: '2rem'
};
const gutter = {
  def: '1.5rem'
};

const radius = '1rem';

const
  App = styled.div`
    background-color: ${color.background};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${gutter.def}
  `,

  Input = styled.div`
    width: 100%;
    input {
      background-color: ${color.gray};
      color: ${color.black};
      margin-bottom: ${gutter.def};
      border-radius: ${radius};
      width: 100%;
      height: 3rem; 
      border: 0;
      outline: none;
      &:hover {
        border: .1rem solid #000;
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
  `,

  TextBox = styled.div`
    background-color: ${color.blue};
    border-radius: ${radius};
    padding: ${gutter.def} 0;
    width: 100%;
    text-align: center;
    * {
      color: #fff;
      font-size: ${fontSize.md};
    }
  `,

  TextBoxWarning = styled.div`
    background-color: ${color.yellow};
    border-radius: ${radius};
    padding: ${gutter.def} 0;
    width: 100%;
    text-align: center;
    * {
      color: ${color.blue};
      font-size: ${fontSize.md};
    }
  `,

  Label = styled.h3`
    font-size: ${fontSize.lg};
    color: ${color.black};
    text-align: center;    
  `;

export {App, Input, Label, Button, TextBox, TextBoxWarning, color};