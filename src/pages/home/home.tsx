/* eslint-disable jsx-a11y/alt-text */
import {
  Backdrop,
  Button,
  Card,
  CardMedia,
  Container,
  Divider,
  Fade,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemCart, removeItemCart } from "../../store/cart/actions";
import { ApplicationState } from "../../store/index";
import logo from "../../assets/logo.svg";
import background from "../../assets/images/background.svg";
import { useStyles } from "./styles";
import { ICart, TypeAction } from "../../store/cart/types";
import { IProduct } from "../../store/product/types";

const Home: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { product, cart } = useSelector((state: ApplicationState) => state);
  const [open, setOpen] = useState<boolean>(false);
  const [hasProductAdded, setHasProductAdded] = useState<boolean>(false);

  useEffect(() => {
    if (cart.cart.length) {
      setHasProductAdded(true);
    } else {
      setHasProductAdded(false);
    }
  }, [cart.cart]);

  const addCart = (item: IProduct) => {
    const payload: ICart = {
      product: item,
      quantity: 1,
      total: item.price,
    };
    dispatch(addItemCart(payload));
  };

  const removeCart = (item: IProduct) => {
    const payload = {
      product: item,
      quantity: 1,
      total: item.price,
    };
    dispatch(removeItemCart(payload));
  };

  const handleClick = (item: IProduct, type: TypeAction) => {
    if (type === "add") {
      addCart(item);
      return;
    }
    removeCart(item);
  };

  const totalPrice = (cart: ICart[]) => {
    const arrayPrice = cart.map((item: ICart) => item.total);
    const total = arrayPrice.reduce((a, b) => a + b, 0);
    return formatCurrency(total);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatCurrency = (value: number) => {
    const formart = value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    return formart;
  };

  return (
    <>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.paperHeader}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                className={classes.buttonBack}
              >
                <span className="icon-arrow-left"></span>
              </IconButton>
              <Typography variant="h5" className={`${classes.paperTitle} typography`}>
                Carrinho
              </Typography>
            </div>
            {hasProductAdded ? (
              <>
                <ul className={classes.paperBody}>
                  {cart.cart.map((item) => (
                    <li>
                      <div className={classes.dFlexRow}>
                        <img src={item.product.image} alt={item.product.title} />
                        <div className={classes.paperProductInfo}>
                          <Typography variant="h5" className={`${classes.productInfoTitle} typography`}>
                            {item.product.title}
                          </Typography>
                          <Typography variant="body2" className={`${classes.productInfoPrice} typography`}>
                            R$ {formatCurrency(item.total ? item.total : item.product.price)}
                          </Typography>
                          <div className={classes.paperQtdyMobile}>
                            <IconButton
                              color="primary"
                              className={classes.paperButtonAdd}
                              component="span"
                              onClick={() => handleClick(item.product, "add")}
                            >
                              <span className="icon-plus"></span>
                            </IconButton>
                            <span className={classes.productInfoQtdy}>{item.quantity}</span>
                            <IconButton
                              color="primary"
                              className={classes.paperButtonAdd}
                              component="span"
                              onClick={() => handleClick(item.product, "subtract")}
                            >
                              <span className="icon-minus"></span>
                            </IconButton>
                          </div>
                        </div>
                      </div>
                      <div className={classes.paperQtdy}>
                        <IconButton
                          color="primary"
                          className={classes.paperButtonAdd}
                          component="span"
                          onClick={() => handleClick(item.product, "add")}
                        >
                          <span className="icon-plus"></span>
                        </IconButton>
                        <span className={classes.productInfoQtdy}>{item.quantity}</span>
                        <IconButton
                          color="primary"
                          className={classes.paperButtonAdd}
                          component="span"
                          onClick={() => handleClick(item.product, "subtract")}
                        >
                          <span className="icon-minus"></span>
                        </IconButton>
                      </div>
                    </li>
                  ))}
                </ul>
                <Divider />
                <div className={classes.paperFooter}>
                  <span className={classes.total}>Total</span>
                  <span className={classes.priceTotal}>R$ {totalPrice(cart.cart)}</span>
                </div>
              </>
            ) : (
              <span>Não contém items no carrinho.</span>
            )}
          </div>
        </Fade>
      </Modal>
      <Container className={classes.container}>
        <img src={background} className={classes.background} alt="logo" />
        <section className={classes.header}>
          <div className={classes.headerLeft}>
            <img src={logo} className={classes.logo} alt="logo" />
          </div>
          <div className={classes.headerRight}>
            <div className={classes.cart}>
              <Button
                type="button"
                onClick={handleOpen}
                className={classes.buttonCart}
                disableElevation
                disableFocusRipple
                disableRipple
              >
                <span className="icon-shopping-bag"></span>
                {hasProductAdded ? <div className={classes.pulseCircle}></div> : ""}
              </Button>
            </div>
            <div className={classes.imageCropper}>
              <img
                src={`https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib`}
                className={classes.photoPerson}
              />
            </div>
          </div>
        </section>
        <section className={classes.content}>
          <Typography variant="h2" className={classes.title}>
            Cosméticos
          </Typography>
          <Grid container spacing={3}>
            {product.products.map((item) => (
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={item.id}>
                <Card className={classes.card}>
                  <CardMedia className={classes.media} image={item.image} title={item.title} />
                  <div className={classes.cardCentered}>
                    <div className={classes.cardContent}>
                      <div className={classes.cardInfos}>
                        <Typography variant="h5" className={`${classes.cardTitle} typography`}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" className={`${classes.cardBody} typography`}>
                          {item.description}
                        </Typography>
                        <Typography variant="body2" className={`${classes.cardPrice} typography`}>
                          R$ {formatCurrency(item.price)}
                        </Typography>
                        <IconButton
                          color="primary"
                          className={classes.cardButtonAdd}
                          component="span"
                          onClick={() => handleClick(item, "add")}
                        >
                          <span className="icon-plus"></span>
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>
      </Container>
    </>
  );
};
export default Home;
