import React from "react";
// @material-ui
import Typography from "@material-ui/core/Typography";
// Component
import SwiperCard from "../../components/Swiper/Swiper"
import ActiveBooksCards from "./ActiveBooksCards/ActiveBooksCards";

// Theme

function Book() {
  return (
    <React.Fragment>
      <ActiveBooksCards />
      <div style={{ marginTop: 40 }}>
        <Typography variant="h2">
          <b>Tamamlanan Kitaplar</b>
        </Typography>
        <hr />
      </div>
    </React.Fragment>
  );
}

export default Book;
