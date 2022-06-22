
import * as React from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as IoIcons from "react-icons/io5"
import { padding } from '@mui/system';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export default function BtnExportXlsPng() {

  const [sir, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClosing = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  

  const [textInput, setTextInput] = useState('');

    const handleTextInputChange = (event) => {
        setTextInput(event.target.value);
    };

  const fileName = textInput;
  const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  
  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
    handleClosing();
  };

  let ref = useRef(null)
  const downloadImage = useCallback(()=>{
      const link = document.createElement("a")
      link.download = "chart.png"
      link.href = ref.current.toBase64Image()
      link.click()
  }, [])


  return (
    <div className='MenuMUI'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color: 'grey', padding:'0px'}}
        className='BtnMUI'
      >
          <span className='iconICON'>
            <IoIcons.IoReorderTwo/>
          </span>
          
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        style={{padding:'0px', margin:'0px'}}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClickOpen}>Export to XLS</MenuItem>
        <MenuItem onClick={downloadImage}>Export to PNG</MenuItem>

        <Dialog open={sir} onClose={handleClose}>
          {/* <DialogTitle>Subscribe</DialogTitle> */}
          <DialogContent>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
            </DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="FileName"
              type="text"
              fullWidth
              variant="standard"
              onChange= {handleTextInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosing}>Cancel</Button>
            <Button onClick={(e) => exportToCSV(apiData, fileName)}>Download</Button>
          </DialogActions>
        </Dialog>
      </Menu>
    </div>
  );
}