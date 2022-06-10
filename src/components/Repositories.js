import React from 'react';
import classes from "./Repositories.module.css";
import Wrapper from './UI/Wrapper';
import Button from "./UI/Button";

const Repositories = (props) => {

  return (
    <Wrapper>
      <h2>Repositories</h2>
      {props.results.map((result, index) => (
        <div className={classes.card} key={index}>
          <div className={classes.info}>
            <a href={result.html_url}>{result.name}</a>
            <h3>
              {result.description?.length > 100
                ? result.description.substring(0, 100) + "..."
                : result.description}
            </h3>
            <p>
              Default branch: <strong>{result.default_branch}</strong>
            </p>
          </div>
          {result.has_issues ? (
            <Button
              onClick={props.clickHandler}
              style={{ cursor: "pointer" }}
              value={result.full_name}
            >
              Show Issues
            </Button>
          ) : (
            <Button style={{ color: "grey" }} disabled>
              None Issues
            </Button>
          )}
        </div>
      ))}
    </Wrapper>
  );
}

export default Repositories