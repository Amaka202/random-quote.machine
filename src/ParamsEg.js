import React from "react";
import { Route, Link } from "react-router-dom";

const Instructor = ({ match, location }) => {
  const { name } = match.params;
  return (
    <div>
      <h3>Instructor Info For {name ? name : "No One"}</h3>
      <h4>
        What's in match? <pre>{JSON.stringify(match, null, 4)}</pre>
      </h4>
      <h4>
        What's in location? <pre>{JSON.stringify(location, null, 4)}</pre>
      </h4>
    </div>
  );
};

const ParamsExample = () => (
  <div>
    <h2>Instructors:</h2>
    <ul>
      <li>
        <Link to="/name/elie">Elie</Link>
      </li>
      <li>
        <Link to="/name/matt">Matt</Link>
      </li>
      <li>
        <Link to="/name/tim">Tim</Link>
      </li>
    </ul>
    <Route path="/name/:name" component={Instructor} />
  </div>
);

export default ParamsExample;