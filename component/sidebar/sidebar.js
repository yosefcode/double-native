import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import img9 from "./img-easy.png";
import img16 from "./16img.png";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
function SideBar(props) {
  const {
    setSmall_large,
    audioSuccess,
    audioError,
    setNumfor,
    point,
    setpoint,
    timer,
    setTimer,
    hardTimer,
    setHardTimer,
    numfor,
    success_Point,
    setSuccess_Point,
    error_Point,
    setError_Point,
  } = props;

  const [audio, setAudio] = useState(true);

  const card16 = () => {
    setNumfor(16);
    setSmall_large("boxlarge");
    setSuccess_Point(0);
    setError_Point(0);
  };

  const card9 = () => {
    setNumfor(9);
    setSmall_large("boxsmall");
    setSuccess_Point(0);
    setError_Point(0);
  };

  return (
    <div className="sidebar">
      <div className="point">
        <div className="icon-point">
          <ThumbUpAltIcon
            style={{
              fontSize: "5vw",
              color: "green",
            }}
          />{" "}
          <div className="number-point">{success_Point}</div>
        </div>

        <div className="icon-point">
          <ThumbDownAltIcon
            style={{
              fontSize: "5vw",
              color: "red",
            }}
          />{" "}
          <div className="number-point" id="top-num-error">
            {error_Point}
          </div>
        </div>
      </div>
      <div className="all-timer">
        <div className="timer">{timer}</div>

        <button
          className="change-timer"
          id={hardTimer !== 10 ? "low" : ""}
          onClick={() => {
            setHardTimer(10);
            setTimer(10);
          }}
        >
          10
        </button>
        <button
          className="change-timer"
          id={hardTimer !== 20 ? "low" : ""}
          onClick={() => {
            setHardTimer(20);
            setTimer(20);
          }}
        >
          20
        </button>
        <button
          className="change-timer"
          id={hardTimer !== 30 ? "low" : ""}
          onClick={() => {
            setHardTimer(30);
            setTimer(30);
          }}
        >
          30
        </button>
      </div>
      <div className="switch">
        <img
          src={img9}
          alt=""
          onClick={card9}
          className="img-switch"
          id={numfor === 16 ? "low" : ""}
        />
        <img
          src={img16}
          alt=""
          onClick={card16}
          className="img-switch"
          id={numfor === 9 ? "low" : ""}
        />
      </div>
      <div>
        {audio === true ? (
          // audioError.volume = 0;
          // audioSuccess.volume = 0;
          <NotificationsIcon
            style={{
              fontSize: "5vw",
            }}
            className="iconbip"
            onClick={() => {
              setAudio(false);
              audioError.volume = 0;
              audioSuccess.volume = 0;
            }}
          />
        ) : (
          <NotificationsOffIcon
            style={{
              fontSize: "5vw",
            }}
            className="iconbip"
            onClick={() => {
              audioError.volume = 1;
              audioSuccess.volume = 1;
              setAudio(true);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default SideBar;
