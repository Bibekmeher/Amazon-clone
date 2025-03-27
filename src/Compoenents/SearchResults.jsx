import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { ProductDetail, headphonesDetail, LaptopDetail, WatchDetail } from "../Details/ProductDetail";

const Container = styled.div`
  max-width: 1600px;
  margin: 30px auto;
  padding: 25px;
  background: linear-gradient(135deg, #eef2f3, #d9e7ff);
  border-radius: 16px;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: #1a202c;
  margin-bottom: 25px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
`;

const ProductCard = styled(Link)`
  text-decoration: none;
  background: #ffffff;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #ffffff, #f0f4ff);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 170px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 8px;
  transition: transform 0.3s;

  ${ProductCard}:hover & {
    transform: scale(1.08);
  }
`;

const ProductName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #2d3748;
  text-align: center;
  margin-top: 6px;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #d32f2f;
  margin-top: 4px;
`;

const Rating = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #ffb400;
  margin-top: 4px;
`;

const Status = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.inStock ? "#27ae60" : "#d63031")};
  margin-top: 4px;
`;

const Delivery = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #007600;
  margin-top: 4px;
`;

const EMI = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #555;
  margin-top: 4px;
`;

const NoResults = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #d9534f;
  text-align: center;
  margin-top: 20px;
`;

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";
  const selectedCategory = queryParams.get("category") || "all";

  const allItems = [
    ...Object.values(headphonesDetail).map((item) => ({ ...item, category: "Headphones" })),
    ...Object.values(LaptopDetail).map((item) => ({ ...item, category: "Laptops" })),
    ...Object.values(WatchDetail).map((item) => ({ ...item, category: "Watches" })),
    ...Object.values(ProductDetail).map((item) => ({ ...item, category: "Mobiles" })),
  ];

  const filteredResults = allItems.filter(
    (item) =>
      (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.brand && item.brand.toLowerCase().includes(searchQuery.toLowerCase()))) &&
      (selectedCategory === "all" || item.category.toLowerCase() === selectedCategory.toLowerCase())
  );

  return (
    <Container>
      {/* <Title>Search Results for: "{searchQuery}" in "{selectedCategory}"</Title> */}
      {filteredResults.length > 0 ? (
        <GridContainer>
          {filteredResults.map((item) => (
            <ProductCard to={`/ProductPaga/${item.id}`} key={item.id}>
              <ProductImage src={`../image/ProductImage/${item.image}`} alt={item.name} />
              <ProductName>{item.name}</ProductName>
              <Price>₹{item.price}</Price>
              <Rating>⭐ {item.rating} ({item.review} Reviews)</Rating>
              <Status inStock={item.status === "In stock"}>{item.status}</Status>
              <Delivery>🚚 {item.delivery}</Delivery>
              <EMI>EMI starts at ₹{item.emi}/month</EMI>
            </ProductCard>
          ))}
        </GridContainer>
      ) : (
        <NoResults>No results found</NoResults>
      )}
    </Container>
  );
};

export default SearchResults;
