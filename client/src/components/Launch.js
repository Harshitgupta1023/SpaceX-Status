import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
const LAUNCH_QUERY = gql`
  query launchquery($id: String!) {
    launch(id: $id) {
      details
      date_local
      success
      name
      flight_number
      rocket
    }
  }
`;
export default function Launch(props) {
  const { id } = props.match.params;
  const { data, loading, error } = useQuery(LAUNCH_QUERY, {
    variables: { id },
    pollInterval: 500,
  });
  if (error) {
    console.log(error);
    return <h1>Error</h1>;
  }
  if (loading) return <h1>Loading ....</h1>;
  const {
    details,
    date_local,
    success,
    name,
    flight_number,
    rocket,
  } = data.launch;
  return (
    <div>
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission:</span>
        {name}
      </h1>
      <h4 className="mb-3">Launch Details</h4>
      <ul className="list-group">
        <li className=" list-group-item">Flight Number: {flight_number}</li>
        <li className=" list-group-item">
          Lauch Year: {date_local.slice(0, 4)}
        </li>
        <li className=" list-group-item">
          Launch Successfull:{" "}
          <span style={{ color: success ? "green" : "red" }}>
            {success ? "Yes" : "No"}
          </span>
        </li>
      </ul>
      <h4 className="mb-3">Rocket Details</h4>
      <ul className="list-group">
        <li className=" list-group-item">Rocket ID: {rocket}</li>
      </ul>
      <h4 className="mb-3">Details</h4>
      <ul className="list-group">
        <li className=" list-group-item">{details}</li>
      </ul>

      <hr />
      <Link to="/" className="btn btn-secondary">
        Back
      </Link>
    </div>
  );
}
