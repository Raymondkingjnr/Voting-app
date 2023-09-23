import React from "react";
import CandidateCard from "./CandidateCard";

const CandidateList = ({ onVote, candidates, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="container">
        {candidates?.map((candidate, index) => {
          <CandidateCard
            key={candidate.id}
            index={index}
            candidate={candidate}
            onVote={onVote}
          />;
        })}
      </div>
    </div>
  );
};

export default CandidateList;
