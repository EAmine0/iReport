import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { useState } from 'react';
import { useEffect } from 'react';
import { TextField } from '@mui/material';
import { withStyles, makeStyles } from '@mui/material/styles';
import './Table.css'
import SkeletonField from '../Loading/SkeletonField';

interface Props {
    url: any
    header: any
    searchBar: any
    
}

function descendingComparator(a:any, b:any, orderBy:any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
  
function getComparator(order:any, orderBy:any) {
  return order === 'desc'
    ? (a:any, b:any) => descendingComparator(a, b, orderBy)
    : (a:any, b:any) => -descendingComparator(a, b, orderBy);
}
  
function stableSort(array:any, comparator:any) {
  const stabilizedThis = array.map((el:any, index:any) => [el, index]);
  stabilizedThis.sort((a:any, b:any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el:any) => el[0]);
}

  
export default function TableSet(props: Props) {
    const {url, header, searchBar} = props

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState(''); //trier directement mettre l'id
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event:any, property:any) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event:any, newPage:any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event:any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const createSortHandler = (property:any) => (event:any) => {
        handleRequestSort(event, property);
    };

    const [rows, setRows] = useState([]);   
    useEffect(() => {    

        fetch(url)
        .then((response) => response.json())
        .then((json) => setRows(json))

    }, []);  

    const [table, setTable] = React.useState(rows);

    useEffect(() => {    
      setTable(rows);
    }, [rows]);  

  

  const requestSearch = (event: any) => {
      const filteredRows = rows.filter(o=>Object.keys(o).some(k=>
        String(o[k]).toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
        ))
        setTable(filteredRows);   
  };

  const [loading, setLoading] = useState(true)
  useEffect(()=>{
      setTimeout(() => {
          setLoading(false)
      }, 1500)
  }, [])

  const handleOnExport = () => {
  
  }

  const columns:any = table[0] && Object.keys(table[0]) || []
  
  let search
  if(searchBar == 'true'){
    search = <TextField 
                variant="filled"
                label="Rechercher"
                className="searchBarMUI"
                color='primary'
                onChange={(searchVal:any) => requestSearch(searchVal)}
                //  InputProps={{
                //    startAdornment: (<InputAdornment position='start'><IoSearch/></InputAdornment>)
                //  }}
              />
  }else if(searchBar == 'false'){
    search = <div></div>
  }else{
    // search = <div></div>
    throw ' TableSet : SearchBar : acceptable parameter : \'true\'  \'false\' '
  }

  return (

    loading ? (
      <SkeletonField />
    ) : (
      <Box >
      {search}
      <Paper style={{boxShadow:'unset'}}>
        <TableContainer>

          <Table>

            <TableHead>
                <TableRow>
                    {header.map((headCell:any) => (
                        <TableCell
                            key={headCell.id}
                            align="center"
                            padding={'none'}
                            // sortDirection ={orderBy === headCell.id ? order : false} 
                            style={{fontWeight:'bold', borderBottom:'2px solid #01B8AA', height:'50px'}}
                        >
                                <TableSortLabel
                                active={orderBy === headCell.id}
                                // direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                                >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                                </TableSortLabel>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            
            <TableBody>
              {stableSort(table, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row:any) => { 
                    return (
                        <TableRow>
                            {
                                columns.map((column:any) => {
                                  return <TableCell size='small' height={27} align='center' key={row.keyid}>{row[column]}</TableCell>
                                })
                            }

                            {/* <TableCell align="center">{row.label}</TableCell>
                            <TableCell align="center">{row.firstvalue}</TableCell>
                            <TableCell align="center">{row.secondvalue}</TableCell>
                            <TableCell align="center">{row.thirdvalue}</TableCell> */}

                        </TableRow>
                    );
                })}
            </TableBody>

          </Table>

        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[ 5, 10, { value: 100000, label: 'All' }]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        
      </Paper>
    </Box>
    )
    
  );
}
