import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCounter, reduceCounter } from "../action/actionTypes";
import React from "react";
import { useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";

function AddCounter(props) {
  const state = useSelector((state) => state.counterReducer);
  const navigate = useNavigate();

  // const onButtonClick = (event, custom) => {
  //   console.log("event is ... " + event.target);
  //   console.log("custom is ... " + custom);
  //   setButtonState( buttonState === (<Button
  //     variant="contained"
  //     type="button"

  //     onClick={() => {props.dispatch(addCounter(props.product))
  //      }}
  //   >
  //    Add to cart
  //   </Button>) ? (
  //   <Button
  //     variant="text"
  //     type="button"

  //     onClick={() => props.dispatch(reduceCounter())}
  //   >
  //    Remove

  //   </Button> ) : (<Button
  //     variant="contained"
  //     type="button"

  //     onClick={() => {props.dispatch(addCounter(props.product))
  //      }}
  //   >
  //    Add to cart
  //   </Button>)
  //   );
  // };
  // const products=[{
  //     id:1,
  //     name:"Mobile"
  // },{
  //     id:2,
  //     name:"Laptop"
  // }]

  const [userList, setUSerList] = React.useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setUSerList(res);
      });
  }, []);

  return (
    <div className="bg-slate-300 min-h-screen">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Product Website
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={state.length} color="error">
                  <ShoppingCartIcon onClick={() => navigate("/addcart")} />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Grid container spacing={2} className="relative top-5 left-28">
          {userList.map((product, index) => (
            <Grid xs={6} md={3} className="bg-white m-3 gap-2 p-5" key={index}>
              <Grid className="relative left-24">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-52 h-52"
                />
              </Grid>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="h6">₹{product.price}</Typography>
              
                <Button
                  variant="contained"
                  type="button"
                  onClick={() => {
                    props.dispatch(addCounter(product));
                  }}
                >
                  Add to cart
                </Button>
       
              
    

              {/* <Button
                  variant="text"
                  type="button"
                  className="bg-red-500"
                  onClick={() => props.dispatch(reduceCounter())}
                >
                 Remove
                  
                </Button> */}
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <button type="button" onClick={()=>props.dispatch(addCounter())}>Add</button> */}
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addCounter, dispatch),
  };
}

export default connect(mapDispatchToProps)(AddCounter);
