import React, {Fragment} from "react";
import url from "../video/1.mp4";
import Video from "../components/Video";
import Search from "../components/Search";

export const AutoDetection = () => {

	return (
  	<Fragment>
  		<div className="row mb-10">
  			<div className="col-xl-9"></div>
  			<div className="col-xl-3">
  				<Search />
  			</div>
  		</div>
	  	<div className="row">
			<div className="col-xl-4 col-sm-6">
			<Video url={url} />
			</div>
			<div className="col-xl-4 col-sm-6">
			<Video url={url} />
			</div>
			<div className="col-xl-4 col-sm-6">
			<Video url={url} />
			</div>
			<div className="col-xl-4 col-sm-6">
			<Video url={url} />
			</div>
	  	</div>
	</Fragment>
  	);
};