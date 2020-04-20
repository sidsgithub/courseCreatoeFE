import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      margin: 10,
    },
    player: {
      minWidth: "50%",
      height: "50%",
      display: "flex",
      marginLeft: "5",
      justifyContent: "center",
    },
    list: {
      marginBottom: "10px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "nowrap",
    },
    button: {
      display: "flex",
      marginLeft: "70",
    },
    panel: {
      marginRight: "10",
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    compartment: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    topics: {},
  }));

  export default useStyles;