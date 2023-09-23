import React from "react";

const CandidateCard = ({ candidate, onVote }) => {
  return (
    <div>
      <h4>{candidate.name}</h4>
      <button onClick={() => onVote(candidate)}>Vote</button>
    </div>
  );
};

export default CandidateCard;
