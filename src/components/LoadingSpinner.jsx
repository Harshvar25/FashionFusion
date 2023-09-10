import React from "react";
import styled from "styled-components";

export default function LoadingSpinner() {
  return (
    <Wrapper>
      <div className="spinner-container">
        <div className="loading-spinner">
        </div>
      </div>
    </Wrapper>

  );
}

const Wrapper = styled.section
  `
.spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px; /* Adjust the height as needed */
}

.loading-spinner {
  width: 100px; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite; /* Adjust the animation duration as needed */
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

`;