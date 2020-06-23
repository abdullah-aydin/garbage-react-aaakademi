import { makeStyles } from "@material-ui/core";

export const BookCardStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    justifyContent: "flex-end",
  },
  card: {
    display: "flex",
    height: "45vh",
    width: "15vw",
    backgroundColor: "#B3C5F8",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },

  imageWrap: {
    flex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    display: "flex",
    maxWidth: "100%",
    height: "100%",
    maxHeight: "-webkit-fill-available",
  },
  content: {
    display: "flex",
    flex: 2,
    flexDirection: "column",
  },
  bookName: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 5,
  },
  bookInitDate: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    fontStyle: "italic",
    marginTop: 2,
  },
  bookStats: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    margin: 4,
  },
  buttons: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 7,
  },
  addPageButton: {
    display: "flex",
    justifyContent: "center",
    marginRight: theme.spacing(0.8),
  },
  chart: {
    display: "flex",
    position: "absolute",
    alignItems: "flex-start",
    transform: "translate(25%,-25%)",
  },
}));
