import React, {useState, useRef} from "react";
import Video from "../components/Video";
import url from "../video/1.mp4";
import {Card, Button} from 'react-bootstrap';
import {Fragment} from 'react';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const VideoDetail = () => {
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);
  const [values, setValues] = React.useState({
    area: 'Nông trường cà chua',
    idDrone: 'DR00256',
    reason: 'gãy đổ',
    person: 'Nguyễn Văn A',
    deadline: '20-12-2020'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const classes = useStyles()

  return (
    <Fragment>
    <div className="row mb-10">
      <div className="col-xl-8">
        <video
          onClick={handleVideoPress}
          ref={videoRef}
          width="100%"
        >
          <source src={url} type="video/mp4"/>
        </video>
      </div>

      <div className="col-xl-4">
        <Card>
          <Card.Header><h2><strong>Chi tiết</strong></h2></Card.Header>
          <Card.Body>
            <div className="wrong-item">
              <div className="icon">
                <Icon className="fas fa-map-marked-alt"/>
              </div>
              <div>Khu vực: </div>
              <div className='desc'>{values.area}</div>
            </div>
            <div className="wrong-item">
              <div className="icon">
                <Icon className="fas fa-space-shuttle"/>
              </div>
              <div>Mã Drone: </div>
              <div className="desc">{values.idDrone}</div>
            </div>
            <div className="wrong-item">
              <div className="icon">
                <Icon className="fas fa-hourglass-start"/>
              </div>
              <div>Thời gian phát hiện: </div>
              <div className="desc">20-12-2020</div>
            </div>
            <div className="wrong-item">
              <div className="icon">
                <Icon className="fas fa-exclamation-triangle"/>
              </div>
              <div>Nguyên nhân: </div>
              <div className="desc">{values.reason}</div>
            </div>
            <div className="wrong-item">
              <div className="icon">
                <Icon className="fas fa-user-alt"/>      
              </div>
              <div>Nhân viên xử lí sự cố: </div>
              <div className="desc">{values.person}</div>
            </div>
            <div className="wrong-item">
              <div className="icon">
                <Icon className="fas fa-hourglass-end"/>
              </div>
              <div>Deadline: </div>
              <div className="desc">{values.deadline}</div>
            </div>
            <Button className="card-button" onClick={handleOpen}>Chỉnh sửa</Button>
          </Card.Body>
        </Card>
      </div>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Chỉnh sửa 
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-name"
              label="Khu vực"
              margin="normal"
              value={values.area}
            />
            <TextField
              id="outlined-name"
              label="Mã drone"
              margin="normal"
              value={values.idDrone}
            />
            <TextField
              id="outlined-name"
              label="Nguyên nhân"
              margin="normal"
              value={values.reason}
            />
            <TextField
              id="outlined-name"
              label="Nhân viên xử lí sự cố"
              margin="normal"
              value={values.person}
            />
            <TextField
              id="outlined-name"
              label="Deadline"
              margin="normal"
              value={values.deadline}
            />
            <Button className="card-button" onClick={handleClose}>Xong</Button>
          </form>
        </div>
      </Modal>
    </div>

    <h3>Các video khác</h3>
    <div className="row mt-3">
      <div className="col-xl-4">
        <Video url={url}/>
      </div>
      <div className="col-xl-4">
        <Video url={url}/>
      </div>
      <div className="col-xl-4">
        <Video url={url}/>
      </div>
    </div>
    </Fragment>
  )
}
