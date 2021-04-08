import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    marginTop: "20px",
    padding: "20px",
    width: "300px",
  },
});
const Container = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default Container;
