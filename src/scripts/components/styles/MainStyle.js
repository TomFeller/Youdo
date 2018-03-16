import React from 'react';
import styled from 'styled-components';

const Color = {
  white: '#fff',
  black: '#000',
  background: '#fff4b0',
  yellow: '#fec854',
  blue: '#5693b9',
  orange: '#e66444',
  gray: '#e8e8e8',
};

const FontSize = {
  sm: '1.5rem',
  md: '1.8rem',
  lg: '3rem'
};
const Gutter = {
  sm: '1rem',
  def: '1.5rem',
  lg: '4rem'
};
const PageGutter = `0 ${Gutter.lg}`;

const Radius = '1rem';

const App = styled.div`
    background-color: ${Color.background};
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    * {
      font-family: 'Alef';
    }
    #tools {
      padding: 3rem;
    }
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

  TitleTop = styled.div`
    background-color: ${Color.orange};
    color: ${Color.white};
    padding: 3rem 0;
    margin: 0 0 7rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    h1 {
      font-size: ${FontSize.lg};
    }
  `,
  TextBox = styled.div`
    background-color: ${Color.blue};
    border-radius: ${Radius};
    width: 100%;
    text-align: center;
    font-size: ${FontSize.md};
    * {
      color: #fff;
      
    }
    button, a {
      width: 100%;
      height: 5rem;
      background-color: transparent
      border: 0;
      display: flex;
      align-items: center
      justify-content: center;
      text-align: center;
      text-decoration: none;
      outline: 0;
      font-size: ${FontSize.md};
    }
  `,

  TextBoxWarning = styled.div`
    background-color: ${Color.yellow};
    border-radius: ${Radius};
    width: 100%;
    text-align: center;
    * {
      color: ${Color.blue};
      font-size: ${FontSize.md};
    }
    button, a {
      width:100%;
      height:5rem;
      background-color:transparent
      border: 0;
      display: flex;
      align-items: center
      justify-content: center;
      text-align: center;
      outline: 0;
      text-decoration: none;
      font-size: ${FontSize.md};
    }
  `,

  Label = styled.h3`
    font-size: ${FontSize.lg};
    color: ${Color.black};
    text-align: center;
    margin-top: 0;
  `,
  LabelSmall = styled.h4`
    font-size: ${FontSize.md};
    font-weight: 100;
    color: ${Color.black};
    text-align: center;    
    white-space: nowrap;
    margin: 0;
   
  `;

export {App, Input, Label, LabelSmall, PageGutter, TextBox, Radius, TextBoxWarning, TitleTop, Color, FontSize, Gutter};