import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0F52BA",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('001', "SSome Description", "", "View Document"),
  createData('001', "SSome Description", "","View Document"),
  createData('003', "SSome Description", "", "View Document"),
  createData('004', "SSome Description", "", "View Document"),
  createData('004', "SSome Description", "", "View Document"),
];

export default function ThirdForm() {
  return (
    <div>
         <div className="border-2 border-gray bg-gray-200">
                <p className='m-1 text-blue-600'>Collateral</p>
            </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Doc ID </StyledTableCell>
            <StyledTableCell align="right">Document Description</StyledTableCell>
            <StyledTableCell align="right">Document No</StyledTableCell>
            <StyledTableCell align="right" className=''></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <hr className="" />
    <div className="border-2 border-gray bg-gray-200">
                <p className='m-1 text-blue-600'>Collateral</p>
            </div>

    <div className='mr-10 ml-10'>
    <Table sx={{ minWidth: 650 }} aria-label="caption table">
        
        
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      
      </Table>
          <div className='flex space-x-96 mt-2'>
            <div className='border-2 p-2 bg-gray-200 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-indigo-900 duration-300'>
                <button>Attach Other Documents</button>
            </div>
            <div className='flex space-x-40'>
                <div className='border-2 p-2 bg-gray-200 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-indigo-900 duration-300'>
                    <button>Previous</button>
                </div>
                <div className='border-2 p-2 bg-gray-200 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-indigo-900 duration-300'>
                    <button>Save and Continue</button>      
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
