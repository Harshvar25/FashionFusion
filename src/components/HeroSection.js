import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import photo from "../images/hero.jpg";

function HeroSection({ myData }) {
  const { name } = myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink to="/products">
              <Button>Shop Now</Button>
            </NavLink>

          </div>
          <div className='hero-section-img'>
            <figure>
              <img src={photo} alt="newtext" className='img-style' />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 12rem 0;
  ${'' /* .container{
    ${'' /* margin:4rem; */}
  } */}
  img {
    border-radius:20px;

    min-width: 20rem;
    height: 35rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height:100%;
      background-color: #00ADB5;
      position: absolute;
      left: 5%;
      top:-2rem;
      z-index: -1;
      border:none;
    border-radius:20px;
    }
  }
  .img-style {
    border:none;
    border-radius:20px;
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 5rem;
    }

    figure::after {
      display:none;
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

    }
    .img-style{
      width:100%;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    figure::after {
      display:none;
    }
    .img-style{
      border-radius:5px;
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
      width:100%;
    }
}
`;

export default HeroSection;
