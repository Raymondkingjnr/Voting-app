import React from "react";
import { useFetchProjects } from "../components/FetchCandidates";
import CandidateList from "../components/CandidateList";

const ProcessVote = () => {
  const { loading, candidates } = useFetchProjects();

  console.log(candidates);

  const handleVotes = (candidate) => {
    window.location.href = `/payment?candidate=${candidate.id}`;
  };

  return (
    <div>
      <h1>header</h1>
      <CandidateList
        candidates={candidates}
        onVote={handleVotes}
        loading={loading}
      />
    </div>
  );
};

export default ProcessVote;
