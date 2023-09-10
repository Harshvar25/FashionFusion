import React from 'react'
import styled from 'styled-components';

export default function Contact() {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.601824039279!2d75.88159578987644!3d22.754822921420676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302a3e290c86f%3A0xa8467371b14d6305!2sJayshree%20Novelties!5e0!3m2!1sen!2sin!4v1694236111906!5m2!1sen!2sin"
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='map-style'></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="mailto:harshbais87@gmail.com"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .map-style{
      border: 0;
      width:40%;
      height:40rem;

      border-radius:20px;
      box-shadow:inset 0 -3em 3em rgba(0, 0, 0, 0.1),
                       0 0 0 2px rgb(255, 255, 255),
                       0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    }
    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            background-color: #222831;
            color: rgb(255 255 255);
            border-radius:10px;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;