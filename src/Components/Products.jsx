import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const [images, setImages] = useState([
    {
      image:
        "https://m.media-amazon.com/images/I/613pOh90MbL._AC_UL480_FMwebp_QL65_.jpg",
      price: "₹500",
      description: "Handbag",
    },
    {
      image: "https://m.media-amazon.com/images/I/51qqenF6xpL._UY695_.jpg",
      price: " ₹739",
      description: "Hand Bag",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61Oo0t4ZwKL._AC_UL480_FMwebp_QL65_.jpg",
      price: "₹799 ",
      description: "Shoes",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81YAifoZLzL._AC_UL480_FMwebp_QL65_.jpg",
      price: "₹1521",
      description: "Womens Dresses",
    },
    {
      image: "https://m.media-amazon.com/images/I/71E-qb6AuRL._UX679_.jpg",
      price: "₹626",
      description: "Womens Dresses",
    },
    {
      image: "https://m.media-amazon.com/images/I/71URTECp2jL._UX679_.jpg",
      price: "₹8626",
      description: "Watches",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71mMD2M0l-L._AC_UL480_FMwebp_QL65_.jpg",
      price: "₹2626",
      description: "Watches",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41azBTqKhKL._SX300_SY300_QL70_FMwebp_.jpg",
      price: "₹32626",
      description: "Acer Laptops",
    },
    {
      image: "https://m.media-amazon.com/images/I/71E-qb6AuRL._UX679_.jpg",
      price: "₹626",
      description: "Womens Dresses",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/51bFRnZznkL._SX679._SX._UX._SY._UY_.jpg",
      price: "₹193",
      description: "Mens",
    },
    {
      image: "https://m.media-amazon.com/images/I/51Js-8owaUL._UX679_.jpg",
      price: "₹926",
      description: "Mens",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41-Z3UHKoQL._SY300_SX300_QL70_FMwebp_.jpg",
      price: "₹22926",
      description: "Hp Laptops",
    },
  ]);

  const [filter, setFilter] = useState("");
  const filteredImages = images.filter(
    (product) =>
      product.description.toLowerCase().includes(filter.toLowerCase()) ||
      product.price.includes(filter)
  );

  const pageCount = Math.ceil(filteredImages.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(0);
  };

  const displayedImages = filteredImages.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  const ImageList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  `;

  const ImageItem = styled.div`
    background-color: black;
    color: white;
    padding: 20px;
    img {
      width: 100%;
    }
  `;
  const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  `;

  const SearchInput = styled.input`
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
  `;

  return (
    <Container>
      <div className="image-gallery">
        <h2>Products</h2>
        <SearchInput
          type="text"
          placeholder="Search by description or price"
          value={filter}
          onChange={handleFilterChange}
        />
        <ImageList>
          {displayedImages.map((product, index) => (
            <ImageItem key={index} className="image-item">
              <img src={product.image} alt={`Image ${index + 1}`} />
              <p>{product.price}</p>
              <p>{product.description}</p>
            </ImageItem>
          ))}
        </ImageList>

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination justify-content-center"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item disabled"}
          breakLinkClassName={"page-link"}
          forcePage={currentPage}
        />
      </div>
    </Container>
  );
};

export default Products;
