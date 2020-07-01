import React from "react";
// @material-ui
import Typography from "@material-ui/core/Typography";
// Component
import ActiveBooksCards from "./ActiveBooksCards/ActiveBooksCards";
import CompletedBookCards from "./CompletedBookCards/CompletedBookCards";

// Theme

const completedBookStructure = (
  <div style={{ marginTop: 20, marginBottom:30 }}>
    <Typography variant="h2">
      <b>Tamamlanan Kitaplar</b>
    </Typography>
    <hr />
  </div>
);

function Book() {
return (
  <React.Fragment>
    <ActiveBooksCards />
    {completedBookStructure}
    <CompletedBookCards/>
  </React.Fragment>
);
}

export default Book;
