import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import FormatPrice from "../helper/FormatPrice";

const Products = (curElem) => {

  const { id, title, price, category, description, image } = curElem;


  const [isFullText, setIsFullText] = useState(false);

  const words = title.split(' ');
  const isLongSentence = words.length > 3;



  return (
    <Wrapper>
      <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={title} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>
              {isLongSentence ? (
                <p>
                  {isFullText ? { title } : `${words.slice(0, 3).join(' ')}...`}
                </p>
              ) : (
                <p>{title}</p>
              )}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
figure{
  height:25rem;
}
.caption{
  color:white;
}
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
    .card{
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

    }
  }
`;

export default Products;
