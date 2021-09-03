import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    maxWidth: 1366,
  },
  background: {
    position: "absolute",
    zIndex: -1,
    padding: 15,
    height: "100%",
    left: 0,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "40px 0px",
  },
  headerLeft: {
    width: "20%",
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      padding: "0 30px",
    },
  },
  logo: {
    height: 26,
    width: "auto",
  },
  headerRight: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      padding: "0 30px",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "80vh",
    paddingBottom: 50,
    [theme.breakpoints.down("md")]: {
      height: "auto",
      marginTop: 40,
      padding: "30px 30px 70px 30px",
    },
  },
  textField: {
    paddingRight: "5rem",
    "& .MuiFormLabel-root": {
      color: "#473889",
      fontWeight: 500,
      fontFamily: "Ubuntu, sans-serif",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 18,
      width: 290,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E7E7E7",
    },
  },
  cart: {
    paddingRight: "45px",

    [theme.breakpoints.down("sm")]: {
      paddingRight: "8%",
    },
  },
  buttonCart: {
    fontSize: 24,
    color: "#413382",
    "&.MuiButton-root:hover": {
      backgroundColor: "transparent",
    },
  },
  user: {
    background: "#E7DDF2",
    padding: "24px 24px",
    borderRadius: "50%",
  },
  title: {
    color: "#473889",
    fontWeight: 700,
    paddingBottom: 36,
    fontFamily: "Ubuntu, sans-serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: 42,
    },
  },
  card: {
    position: "relative",
    boxShadow:
      "0px 1px 0px -1px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 2px 19px 24px 0px rgb(71 56 137 / 30%) !important",
    "&.MuiPaper-rounded": {
      borderRadius: 18,
    },
  },
  cardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    background: "#fff",
    width: "100%",
    marginBottom: "2.4%",
    backgroundColor: "#E7DDF2",
    borderRadius: 18,

    "&:hover": {
      backgroundColor: "#776FC3",
      "& .typography": {
        color: "#fff",
      },
    },
  },
  cardCentered: {
    width: "95%",
    height: "100%",
    position: "relative",
    margin: "0 auto",
  },
  cardInfos: {
    position: "relative",
    padding: "22px 20px",
  },
  cardTitle: {
    color: "#473889",
    fontWeight: 700,
    paddingBottom: 5,
    fontFamily: "Ubuntu, sans-serif",
    fontSize: 20,
  },
  cardBody: {
    color: "#988FBB",
    fontWeight: 300,
    paddingBottom: 15,
    fontSize: 13,
    fontFamily: "Ubuntu, sans-serif",
  },
  cardPrice: {
    color: "#413382",
    fontWeight: 500,
    fontSize: 14,
    fontFamily: "Ubuntu, sans-serif",
  },
  media: {
    height: 460,
  },
  cardButtonAdd: {
    position: "absolute",
    bottom: 14,
    right: 14,
    backgroundColor: "#FFFFFF",
    opacity: 0.8,
    marginTop: "-1px",
    padding: "12px 13px",
    borderRadius: "50%",
    boxShadow: "1px 4px 14px rgb(166 145 188 / 50%)",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#574A97",
    },
    "& .icon-plus": {
      fontSize: 22,
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 0,
  },
  paper: {
    backgroundColor: "#fff",
    padding: "20px 30px",
    width: 480,
    height: "96%",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      overflow: "hidden",
      padding: 20,
    },
  },
  paperHeader: {
    display: "flex",
    alignItems: "center",
  },
  paperTitle: {
    color: "#473889",
    fontWeight: 500,
    fontSize: 34,
    fontFamily: "Ubuntu, sans-serif",
  },
  paperProductInfo: {
    padding: "1.2rem",
  },
  paperButtonAdd: {
    backgroundColor: "#FFFFFF",
    opacity: 0.8,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: "7px",
    borderRadius: "50%",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#574A97",
    },
    "& .icon-plus, & .icon-minus": {
      fontSize: 20,
    },
  },
  paperQtdyMobile: {
    alignItems: "center",
    paddingTop: 15,
    display: "none",

    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
  paperQtdy: {
    display: "flex",
    alignItems: "center",
    paddingRight: 8,

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  dFlexRow: {
    display: "flex",
    flexDirection: "row",
  },
  productInfoTitle: {
    color: "#473889",
    fontWeight: 700,
    paddingBottom: 5,
    fontFamily: "Ubuntu, sans-serif",
    fontSize: 20,
  },
  productInfoPrice: {
    color: "#413382",
    fontWeight: 500,
    fontSize: 14,
    fontFamily: "Ubuntu, sans-serif",
  },
  productInfoQtdy: {
    padding: 8,
    color: "#413382",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Ubuntu, sans-serif",
  },
  paperFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 8px",
  },
  total: {
    color: "#988FBB",
    fontWeight: 400,
    fontSize: 24,
    fontFamily: "Ubuntu, sans-serif",
  },
  priceTotal: {
    color: "#413382",
    fontWeight: 700,
    fontSize: 30,
    fontFamily: "Ubuntu, sans-serif",
  },
  paperBody: {
    maxHeight: 575,
    minWidth: 282,
    overflowY: "auto",
    padding: "15px 0",
    margin: 0,
    "& li": {
      display: "flex",
      justifyContent: "space-between",
      listStyle: "none",
      padding: 8,
      background: "#E7DDF2",
      borderRadius: 34,
      margin: "15px 0",
    },
    "& img": {
      height: 150,
      width: 110,
      objectFit: "cover",
      borderRadius: 28,
    },
  },
  buttonBack: {
    backgroundColor: "#E7DDF2",
    color: "#473889",
    margin: 24,
  },
  pulseCircle: {
    position: "absolute",
    width: 10,
    height: 10,
    margin: 5,
    bottom: 0,
    right: 13,
    borderRadius: "50%",
    backgroundColor: "#E82E00",
    boxShadow: `0 0 0 ${fade("#E82E00", 0.5)}`,
    animation: `$pulsing-danger 1500ms ${theme.transitions.easing.easeOut} infinite`,
  },
  imageCropper: {
    width: 48,
    height: 48,
    position: "relative",
    overflow: "hidden",
    borderRadius: "50%",
  },
  photoPerson: {
    display: "inline",
    margin: " 0 auto",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  "@keyframes pulsing-danger": {
    "0%": {
      boxShadow: `0 0 0 0 ${fade("#E82E00", 0.5)}`,
    },
    "70%": {
      boxShadow: `0 0 0 8px ${fade("#E82E00", 0.0)}`,
    },
    "100%": {
      boxShadow: `0 0 0 0 ${fade("#E82E00", 0.0)}`,
    },
  },
}));
