import React from "react";
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { reduceCounter,increCounter,decreCounter } from "../action/actionTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function Counter(props) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const listItems = props.products.map((number, id) => (
    <StyledTableRow>
      <StyledTableCell>
        {" "}
        <img
          src={number.image}
          alt={number.title}
          className="w-32 h-32 relative left-6"
        />
      </StyledTableCell>
      <StyledTableCell>{number.title} </StyledTableCell>

      <StyledTableCell align="right">₹{number.price}</StyledTableCell>
  
      <StyledTableCell align="right">
        <Button
          variant="text"
          type="button"
          onClick={() => props.dispatch(reduceCounter())}
        >
          <DeleteIcon className="text-red-500" />
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  ));

  return (
    <div className="bg-slate-300 min-h-screen">
      <Typography variant="h6">Your Item</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>image</StyledTableCell>
              <StyledTableCell>products name</StyledTableCell>

              <StyledTableCell align="right">price</StyledTableCell>
              <StyledTableCell align="right">inc/dec</StyledTableCell>
              <StyledTableCell align="right">remove</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listItems}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    products: state.counterReducer,
  };
}

export default connect(mapStateToProps)(Counter);
