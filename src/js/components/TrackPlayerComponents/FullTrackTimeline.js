import React from 'react'
import cx from './TrackPlayerComponents.styl'
import { TrackTime } from './TrackTimeline'

//TODO add listener for width change of container, and update canvas as needed
//Right now it listens for change of width in entire page, while this is correct, it might now always be.
//TODO Do not render canvas if he isn't visible on screen. Might hurt performance when scrolling down too much in stream
//Also it will affect amount of memory used by canvas
//TODO also we should cache computed values after array was scaled.
//This is because each second, while listening to music, we will change "played time", and because of that we would need fully recalculate values.
//We also could cache canvas, witch is better, and I might do that.
function handlePlayerCanvas(trackInfo, played, totalTime, container) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const updateCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = Math.floor(container.getBoundingClientRect().width) - 40, height = 100;

    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "#04bd5b";

    let aspect = Math.ceil(4 * trackInfo.length / width);
    if (aspect <= 0) return;

    const widthOfLine = width / Math.floor(trackInfo.length / aspect) - 2;
    const listenedUpTo = played / totalTime * trackInfo.length;
    let xPos = 0;
    for (let i = 0; i < trackInfo.length; i += aspect)
    {
      if (i > listenedUpTo)
      {
        ctx.fillStyle = "#acacac";
      }

      let sum = 0;
      for (let offset = 0; offset < aspect && offset < trackInfo.length; ++offset)
      {
        sum += trackInfo[i + offset];
      }
      sum /= Math.min(aspect, trackInfo.length - i);

      ctx.fillRect(xPos, (1 - sum) * height, widthOfLine, sum * height);
      xPos += widthOfLine + 2;
    }
  };
  requestAnimationFrame(() => {
    updateCanvas();
    container.appendChild(canvas);
    window.addEventListener('resize', updateCanvas);
  });
}

export function FullTrackTimeline(props) {
  return (
    <div className={cx("track-timeline--full")}>
      <span className={cx("audio-graph")} ref={handlePlayerCanvas.bind(null, props.trackAudioInfo, props.played, props.totalTime)}/>
      <div className={cx("audio-graph__time")}>
        <TrackTime time={props.played} className={cx("audio-graph__played-time")}/>
        <TrackTime time={props.totalTime} className={cx("audio-graph__total-time")}/>
      </div>
    </div>
  );
}