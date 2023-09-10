import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

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
                            <img src='https://images.unsplash.com/photo-1577208288347-b24488f3efa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80' />
                        </figure>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    border-radius:20px

    min-width: 10rem;
    height: 10rem;
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
      left: 15%;
      top: -5rem;
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
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 100%;
      height: 100%;
      left: 3%;
      top:8%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
