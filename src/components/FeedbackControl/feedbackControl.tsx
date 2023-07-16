import React, { Fragment } from "react";
import "./feedbackControl.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { VOTES, VoteRequest, voteResponse } from "../../services/ai-service";
import { Answer } from "../../types/Message.interface";

interface FeedbackControlProps {
  response: Answer;
}

function FeedbackControl({ response }: FeedbackControlProps) {
  const [feedbackStatus, setFeedbackStatus] = React.useState<string>("");

  const voteUp = async () => {
    if (response.id === undefined)
      return console.error("Answer id is undefined");
    const voteData: VoteRequest = {
      questionId: response.id,
      vote: VOTES.UP,
    };
    await voteResponse(voteData);
    setFeedbackStatus("Thanks for your feedback!");
  };
  const voteDown = async () => {
    if (response.id === undefined)
      return console.error("Answer id is undefined");
    const voteData: VoteRequest = {
      questionId: response.id,
      vote: VOTES.DOWN,
    };
    await voteResponse(voteData);
    setFeedbackStatus("Thanks for your feedback!");
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
