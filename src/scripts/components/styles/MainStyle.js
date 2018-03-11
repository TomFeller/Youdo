import React from 'react';
import styled from 'styled-components';

const Color = {
  white: '#fff',
  black: '#000',
  background: '#fff498',
  red: 'red',
  yellow: '#ffca48',
  blue: '#5492bc',
  orange: '#e8643e',
  gray: '#e8e8e8',
};

const FontSize = {
  sm: '1.2rem',
  md: '1.6rem',
  lg: '2rem'
};
const Gutter = {
  def: '1.5rem',
  lg: '4rem'
};

const Radius = '1rem';

const
  App = styled.div`
    background-color: ${Color.background};
    padding: ${Gutter.def}
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  `,

  Input = styled.div`
    width: 100%;
    input {
      background-color: ${Color.gray};
      color: ${Color.black};
      margin-bottom: ${Gutter.def};
      border-radius: ${Radius};
      width: 100%;
      height: 4rem; 
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
    padding: 0 ${Gutter.def};
    border-radius: ${Radius};
    height: 3rem;
    background-color: red;
    width: 100%;
    display: block;
    text-align: center;
    line-height: 1.8rem;
  }
  `,

  TitleTop = styled.div`
    background-color: ${Color.orange};
    color: ${Color.white};
    padding: 3rem 0;
    margin: -1.5rem 0 10rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
`,
  TextBox = styled.div`
    background-color: ${Color.blue};
    border-radius: ${Radius};
    padding: ${Gutter.def} 0;
    margin: ${Gutter.def} 0;
    width: 100%;
    text-align: center;
    * {
      color: #fff;
      font-size: ${FontSize.md};
    }
  `,

  TextBoxWarning = styled.div`
    background-color: ${Color.yellow};
    border-radius: ${Radius};
    padding: ${Gutter.def} 0;
    width: 100%;
    text-align: center;
    * {
      color: ${Color.blue};
      font-size: ${FontSize.md};
    }
  `,

  Label = styled.h3`
    font-size: ${FontSize.lg};
    color: ${Color.black};
    text-align: center;    
  `;

export {App, Input, Label, Button, TextBox, TextBoxWarning, TitleTop, Color, Gutter};