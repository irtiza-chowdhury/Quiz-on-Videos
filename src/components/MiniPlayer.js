import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import classes from '../styles/MiniPlayer.module.css';

export default function MiniPlayer({ title, id }) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoURL = `https://www.youtube.com/watch?v=${id}`;

  function toogleMiniPlayer() {
    if (!status) {
      setStatus(true);
      buttonRef.current.classList.remove(classes.floatingBtn);
    } else {
      setStatus(false);
      buttonRef.current.classList.add(classes.floatingBtn);
    }
  }
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toogleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
      <span className={`material-icons-outlined ${classes.close}`} onClick={toogleMiniPlayer}>
        {' '}
        close{' '}
      </span>
      <ReactPlayer
        className={classes.player}
        url={videoURL}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      {/* <img src={image} alt="videos" /> */}
      <p>{title}</p>
    </div>
  );
}
