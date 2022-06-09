import React, { useState } from "react";
import axios from "axios";
import Issues from "./Issues";
import Repositories from "./Repositories";
import classes from "./Results.module.css";

const Results = (props) => {

  const [showIssues, setShowIssues] = useState(false);
  const [issuesResults, setIssuesResults] = useState([]);

  //fetching issues
  const fetchDataIssues = async (name) => {
    try {
      const result = await axios.get(
        `https://api.github.com/repos/${name}/issues`
      );
      result && setIssuesResults(result.data);
    } catch (err) {
      console.log(err); 
    }
  };

  return (
    <div className={classes.results}>
      <Repositories
        results={props.results}
        setShowIssues={setShowIssues}
        fetchDataIssues={fetchDataIssues}
      />
      {showIssues && (
        <Issues setShowIssues={setShowIssues} issuesResults={issuesResults} />
      )}
    </div>
  );
};

export default Results;
