import React, { Fragment } from "react";
import "./feedbackControl.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { VOTES, VoteRequest, voteResponse } from "../../services/ai-service";
import { Answer } from "../../types/Message.interface";

interface FeedbackControlProps {
  answer: Answer;
}

function FeedbackControl({ answer }: FeedbackControlProps) {
  const [feedbackStatus, setFeedbackStatus] = React.useState<string>("");

  const voteUp = async () => {
    if (answer.id === undefined) return console.error("Answer id is undefined");
    const voteData: VoteRequest = {
      questionId: answer.id,
      vote: VOTES.UP,
    };
    await voteResponse(voteData);
    setFeedbackStatus("Thanks for your feedback!");
  };
  const voteDown = async () => {
    if (answer.id === undefined) return console.error("Answer id is undefined");
    const voteData: VoteRequest = {
      questionId: answer.id,
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
