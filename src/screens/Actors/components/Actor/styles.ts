import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  posterImg: {
    maxWidth: "100%",
    height: "auto",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  media: {
    width: "500px",
    height: "700px",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      margin: "auto",
    },
  },
  overview: {
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
}));
