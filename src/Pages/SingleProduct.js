import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../components/context/productcontext";
import { Container } from "../styles/Container";
import FormatPrice from "../helper/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import LoadingSpinner from "../components/LoadingSpinner";
import AddToCart from "../components/AddToCart";

const API = "https://fakestoreapi.com/products";

const SingleProduct = () => {

  const stock = Math.floor(Math.random() * 100);
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();
  // console.log(id);


  const {
    id: alias,
    title,
    price,
    description,
    category,
    image,
  } = singleProduct;
  



  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, [id]); 
  
  

  if (isSingleLoading) {
    return <div className="page_loading"><LoadingSpinner /></div>;
  }

  return (
    <Wrapper>
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <img src={image} alt="prodict-img" />
          </div>

          <div className="product-data">
            <h2>{title}</h2>
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>Category: {category}</p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Product Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> XYZ </span>
              </p>
              <p>Availability : {stock }</p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} stockValue={stock} />}
          </div>
        </div>
      </Container>


    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
  img{
    width:50%;
    height:auto;
  }
`;

export default SingleProduct;
