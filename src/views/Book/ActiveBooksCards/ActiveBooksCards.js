import React, { useState } from "react";
// @material-ui
import { Box } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
// Component
import ResponsiveSwiper from "../../../components/Swiper/Swiper";
import BookCard from "../../../components/BookCard/BookCard";
// Theme
// Data
import { bookData as DATA } from "../../../data/Data";

function ActiveBooksCards() {
  // ACTIVE BOOK SECTION
  const [name, setBookName] = useState(DATA.activeBookData.name);
  const [initDate, setInitDate] = useState(DATA.activeBookData.initDate);
  const [readPage, setReadPage] = useState(DATA.activeBookData.readPage);
  const [totalPage, setBookRecord] = useState(DATA.activeBookData.totalPage);
  const [image, setBookImage] = useState(DATA.activeBookData.image);

  return (
    <Grid container spacing={4} style={{display:"flex", justifyContent:"flex"}}>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <BookCard
          name={name}
          initDate={initDate}
          readPage={readPage}
          totalPage={totalPage}
          image={image}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <BookCard
          name={name}
          initDate={initDate}
          readPage={readPage}
          totalPage={totalPage}
          image={image}
        />
      </Grid>

      <Grid item xs={6} sm={4} md={3} lg={2}>
        <BookCard
          name={name}
          initDate={initDate}
          readPage={readPage}
          totalPage={totalPage}
          image={image}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <BookCard
          name={name}
          initDate={initDate}
          readPage={readPage}
          totalPage={totalPage}
          image={image}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <BookCard
          name={name}
          initDate={initDate}
          readPage={readPage}
          totalPage={totalPage}
          image={image}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <BookCard
          name={name}
          initDate={initDate}
          readPage={readPage}
          totalPage={totalPage}
          image={image}
        />
      </Grid>
    </Grid>
  );
}
export default ActiveBooksCards;
