import React, {useState, useRef} from "react";
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Player } from 'video-react';
import Icon from '@material-ui/core/Icon';
import FormHelperText from '@material-ui/core/FormHelperText'; 
import FormControl from '@material-ui/core/FormControl'; 
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function Video ({url}) {
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);
  var tempDate = new Date();
  var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
  const [values, setValues] = React.useState(null);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleVideoPress = () => {
    if(playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }
  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 500,
      backgroundColor: 'white',
      padding: theme.spacing(4),
      outline: 'none',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
  }));

  const classes = useStyles();
  return (
    <div className="video">
      <Player
        playsInline
        muted
        src={url}
      />
      <div className="video-content">
        <h3>Nông trường cà chua</h3>
        <div class="time"><strong>Thời gian: </strong>20-10-2020</div>
        <div class="des"><strong>Nguyên nhân: </strong>
          <span className="text-danger">gãy đổ</span>
        </div>
        <div class="status"><strong>Tình trạng: </strong>
          <span className="text-primary">Đang xử lí</span>
        </div>
      </div>
      <div className="drone-name">
        Mã drone: DR0001
      </div>
      <div className="mark">
        <Icon className="far fa-bookmark" onClick={handleOpen}/>
      </div>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Đánh dấu
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-name"
              label="Khu vực"
              margin="normal"
            />
            <TextField
              id="outlined-name"
              label="Mã drone"
              margin="normal"
            />
            <TextField
              id="outlined-name"
              label="Nguyên nhân"
              margin="normal"
            />
            <TextField
              id="outlined-name"
              label="Nhân viên xử lí sự cố"
              margin="normal"
            />
            <TextField
              id="outlined-name"
              label="Deadline"
              margin="normal"
            />
            <Button className="card-button" onClick={handleClose}>Xong</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Video;