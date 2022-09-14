import React from "react";
import PropTypes from "prop-types"
import { Box } from "@chakra-ui/react";
function VideoEmded({videoID}){
return(
  <iframe
  width="500"
  height="300"
  src={videoID}
  frameBorder="1"
  allow="accelerometer;autoplay;clipboard"
  allowFullScreen
  title="videoyoutubes"

  />
);
}
// VideoEmded.propTypes={
//   videoID:PropTypes.string.isRequired
// }
export default VideoEmded;