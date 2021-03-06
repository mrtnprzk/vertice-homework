import React from "react";
import Wrapper from "./UI/Wrapper";
import classes from "./Issues.module.css";

const Issues = (props) => {

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => props.setShowIssues(false)}
      />
      <Wrapper className={classes.modal}>
        <h2>Repository Issues</h2>
        {props.issuesResults.map((issue, index) => (
          <div className={classes.card} key={index}>
            <a href={issue.html_url}>
              {issue.title?.length > 60
                ? issue.title.substring(0, 60) + "..."
                : issue.title}
            </a>
            <p>
              {issue.body?.length > 180
                ? issue.body.substring(0, 180) + "..."
                : issue.body}
            </p>
          </div>
        ))}
      </Wrapper>
    </>
  );
};

export default Issues;
