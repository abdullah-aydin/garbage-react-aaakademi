import React, { useState } from "react";
// @material-ui
import { Box } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
// Component
import CompletedBookCard from "../../../components/BookPage/CompletedBookCard/CompletedBookCard";
// Theme
// Data
import { activeBookData as DATA } from "../../../data/Data";

function CompletedBookCards() {
  // ACTIVE BOOK SECTION

  // const [name, setBookName] = useState(DATA.activeBookData.book.name);
  // const [initDate, setInitDate] = useState(DATA.activeBookData.book.initDate);
  // const [readPage, setReadPage] = useState(DATA.activeBookData.book.readPage);
  // const [totalPage, setBookRecord] = useState(DATA.activeBookData.book.totalPage);
  // const [image, setBookImage] = useState(DATA.activeBookData.book.image);

  return (
    <Grid
      container
      spacing={4}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {DATA.map((book, index) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
          <CompletedBookCard
            name={book.name}
            initDate={book.initDate}
            readPage={book.readPage}
            totalPage={book.totalPage}
            image={book.image}
          />
        </Grid>
      ))}
    </Grid>
  );
}
export default CompletedBookCards;




