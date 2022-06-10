import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Issues from "./Issues";
import Repositories from "./Repositories";
import classes from "./Results.module.css";

const Results = (props) => {

  const [issuesResults, setIssuesResults] = useState([]);
  const [issueName, setIssueName] = useState("");
  const [showIssues, setShowIssues] = useState(false);

  const ref = useRef(false);

  function clickHandler(e) {
    const name = e.target.value;
    setIssueName(name);
    setShowIssues(true);
  }
  
  const fetchDataIssues = async () => {
    try {
      const result = await axios.get(
        `https://api.github.com/repos/${issueName}/issues`
      );
      result && setIssuesResults(result.data);
    } catch (err) {
        console.log(err);   
    }
  };

  useEffect(() => {
    if (ref.current) {
      fetchDataIssues();
    } else {
      ref.current = true;
    }
  }, [issueName]);

  return (
    <div className={classes.results}>
      <Repositories
        results={props.results}
        setShowIssues={setShowIssues}
        clickHandler={clickHandler}
      />
      {showIssues && (
        <Issues
          setShowIssues={setShowIssues}
          issuesResults={issuesResults}
          results={props.results}
        />
      )}
    </div>
  );
};

export default Results;
