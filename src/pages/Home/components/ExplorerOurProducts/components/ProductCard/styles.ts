import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 330px;
  margin: 0 -1rem;

  .image-container {
    display: block;
    background-color: #F6F7FB;
    border-radius: 6px;
    /* overflow: hidden; */
    position: relative;
    cursor: pointer;

    &:hover .actions-container {
      opacity: 1;
      bottom: 30px;
      visibility: visible;
      transition: .5s;
    }

    img {
      border-radius: 6px;
      width: 100%;
      transition: .3s;

      &:hover {
        transform: scale(1.08);
      }
    }

    .badget-container {
      position: absolute;
      top: 24px;
      left: auto;
      right: -14px;
      z-index: 2;

      .badget-promotional {
        background-color: #3577F0;
        padding: 4px 10px;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        border-radius: 4px;
        box-shadow: 0 8px 16px 0 rgba(53,119,240,.3);
      }
    }

    .actions-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      visibility: hidden;
      transition: .5s;

      .view, .favorite {
        /* animatedButton */
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 0;
          border-radius: 4px;
          padding: 0;
          width: 40px;
          height: 40px;
          box-shadow: 0 16px 32px 0 rgba(0,0,0,.06);
          z-index: 1;

          svg {
            width: 14px;
          }
        }
      }

      .add-to-cart {
        /* animatedButton */
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          /* width: 130px; */
          height: 40px;
          margin-right: 0;
          padding: 0 5px;
          border-radius: 4px;

          color: white;
          font-weight: 700;
          font-size: 0.875rem;
        }
      }
    }
  }

  .product-info {
    margin: 25px 0 30px;

    .rating-stars {
      display: flex;
      gap: 0.1rem;
      margin-bottom: 10px;

      font-weight: 500;
      font-size: 0.8125rem;
      color: #777;

      svg {
        color: #ffdc60;
        font-weight: 900;
        font-size: 1.1rem;
      }

      span {
        margin-left: 5px;
      }
    }

    .product-name {
      margin-bottom: 10px;

      a {
        color: #777;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;

        &:hover {
          color: #3577F0;
        }
      }
    }

    .prices {
      display: flex;
      gap: 10px;
      padding: 0 4px;

      font-weight: 700;
      font-size: 20px;

      .promotional-price {
        color: #292930;
      }

      .original-price {
        color: #d6d6d6;
        text-decoration: line-through;
      }
    }
  }
`
