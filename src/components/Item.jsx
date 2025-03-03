import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.bgColor || "#f8f9fa"};
  border-radius: 16px;
  padding: 20px;
  width: 350px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const HeartIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: red;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
`;

const ImageShadow = styled.div`
  position: absolute;
  width: 80%;
  height: 20px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  bottom: -5px;
  filter: blur(5px);
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  border-radius: 10px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: gray;
  margin: 5px 0;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: #4a4e69;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #22223b;
  }
`;

const CartItem = ({ image, title, subtitle, price, bgColor }) => {
    return (
        <Card bgColor={bgColor}>
            <HeartIcon>❤️</HeartIcon>
            <ImageContainer>
                <Image src={image} alt={title} />
                <ImageShadow />
            </ImageContainer>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <Price>${price}.00</Price>
            <Button>Buy</Button>
        </Card>
    );
};

export default CartItem;