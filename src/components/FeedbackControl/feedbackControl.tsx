import React, { Fragment } from "react";
import "./feedbackControl.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function FeedbackControl() {
  const [feedbackStatus, setFeedbackStatus] = React.useState<string>("");

  const voteUp = () => {
    console.log("Up");
    setFeedbackStatus("Thanks for your feedback! you stupid ass");
  };
  const voteDown = () => {
    console.log("Down");
    setFeedbackStatus("Thanks for your feedback! you stupid ass");
  };
  return (
    <div className="FeedbackControl">
      {feedbackStatus ? (
        <div>{feedbackStatus}</div>
      ) : (
        <Fragment>
          <div className="feedback-message">Was that helpful?</div>
          <div className="feedback-button up" onClick={voteUp}>
            <FontAwesomeIcon icon={faThumbsUp} />
            {/* <i className="fa-regular fa-thumbs-down"></i> */}
          </div>
          <div className="feedback-button down" onClick={voteDown}>
            <FontAwesomeIcon icon={faThumbsDown} />
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default FeedbackControl;
