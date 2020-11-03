import React, {Fragment} from "react";
import {useSubheader} from "../../_metronic/layout";
import url from "../video/1.mp4";
import Video from "../components/Video";
import Search from "../components/Search";
import Input from '@material-ui/core/Input'; 
import OutlinedInput from '@material-ui/core/OutlinedInput'; 
import FilledInput from '@material-ui/core/FilledInput'; 
import InputLabel from '@material-ui/core/InputLabel'; 
import MenuItem from '@material-ui/core/MenuItem'; 

export const Follow = () => {

  return (
  	<Fragment>
	  	<div className="row">
	  		<div className="col-xl-6 col-sm-1">
	  			<Video url={url} />
	  		</div>
	  		<div className="col-xl-6 col-sm-1">
	  			<Video url={url} />
	  		</div>
	  		<div className="col-xl-6 col-sm-1">
	  			<Video url={url} />
	  		</div>
	  		<div className="col-xl-6 col-sm-1">
	  			<Video url={url} />
	  		</div>
	  	</div>
	</Fragment>
  );
};
