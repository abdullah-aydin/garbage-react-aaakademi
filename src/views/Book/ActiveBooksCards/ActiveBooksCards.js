import React, { useState } from "react";
// @material-ui
// import { Box } from "@material-ui/core";
// import { Container } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
// Component
import ActiveBookCard from "../../../components/BookPage/ActiveBookCard/ActiveBookCard";
import AddBookCard from "../../../components/BookPage/ActiveBookCard/AddBookCard";
import EmptyBookCard from "../../../components/BookPage/ActiveBookCard/EmptyBookCard";
// Theme
import Swiper from "react-id-swiper";
// Data
import { activeBookData as DATA } from "../../../data/Data";

function ActiveBooksCards() {
  // ACTIVE BOOK SECTION

  // const [name, setBookName] = useState(DATA.activeBookData.book.name);
  // const [initDate, setInitDate] = useState(DATA.activeBookData.book.initDate);
  // const [readPage, setReadPage] = useState(DATA.activeBookData.book.readPage);
  // const [totalPage, setBookRecord] = useState(DATA.activeBookData.book.totalPage);
  // const [image, setBookImage] = useState(DATA.activeBookData.book.image);

  const params = {
    slidesPerView: 6,
    spaceBetween: 40,
    // centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Swiper {...params} shouldSwiperUpdate="true">
      {DATA.map((book, index) => (
        <span key={index}>
          <ActiveBookCard
            name={book.name}
            initDate={book.initDate}
            readPage={book.readPage}
            totalPage={book.totalPage}
            image={book.image}
          />
        </span>
      ))}
      <span>
        <AddBookCard />
      </span>
      <span>
        <EmptyBookCard />
      </span>
    </Swiper>
  );
}
export default ActiveBooksCards;
    // <Grid
    //   container
    //   spacing={4}
    //   style={{ display: "flex", justifyContent: "center" }}
    // >
      // <Grid item xs={6} sm={4} md={3} lg={2}>  
      // </Grid>
    // </Grid>