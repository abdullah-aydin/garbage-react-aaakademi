import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Typography from "@material-ui/core/Typography";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title:{
    padding: "16px 24px 0px 24px"
  },
  input: {
    display: "none",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function FormDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [bookName, setBookName] = useState("");
  const [totalPage, setTotalPage] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBookName("");
    setTotalPage("");
    setSelectedFile();
    setPreview();
  };

  console.log(bookName);
  console.log(totalPage);

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <Box display="flex" justifyContent="center">
          <DialogTitle id="form-dialog-title" className={classes.title}>
            YENİ KİTAP EKLE
          </DialogTitle>
        </Box>
        <DialogContent>
          <Typography variant="body2">
            Yeni kitap eklemek için lütfen aşağıdaki alanları doldurunuz.
          </Typography>
          <Box display="flex" justifyContent="center">
            <DialogActions>
              <div className={classes.root}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  type="file"
                  onChange={onSelectFile}
                />
                {selectedFile && <img src={preview} style={{ width: 125 }} />}
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    color="default"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                    size="small"
                  >
                    Resim Ekle
                  </Button>
                </label>
              </div>

              {/* <div>
                <input type="file" onChange={onSelectFile} />
                {selectedFile && <img src={preview} />}
              </div> */}
            </DialogActions>
          </Box>
          <TextField
            id="bookName"
            variant="outlined"
            label="Kitap Adı"
            fullWidth
            size="small"
            margin="normal"
            required
            InputLabelProps={{
              shrink: true,
            }}
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
          <Box display="flex" justifyContent="center">
            <TextField
              id="totalPage"
              variant="outlined"
              label="Sayfa Sayısı"
              type="number"
              margin="normal"
              size="small"
              required
              value={totalPage}
              onChange={(e) => setTotalPage(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                inputProps: {
                  max: 100000,
                  min: 0,
                },
              }}
            />
          </Box>
        </DialogContent>
        <Box display="flex" justifyContent="center">
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Kaydet
            </Button>
            <Button onClick={handleClose} color="primary">
              Vazgeç
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
