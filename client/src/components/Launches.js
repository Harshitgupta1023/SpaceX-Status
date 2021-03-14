import React from "react";
import { gql, useQuery } from "@apollo/client";
import Launchitem from "./Launchitem";
import Missionkey from "./Missionkey";
const LAUNCHES_QUERY = gql`
  query {
    launches {
      flight_number
      details
      date_local
      success
      name
      id
    }
  }
`;
export default function Launches() {
  const { data, error, loading } = useQuery(LAUNCHES_QUERY);
  if (error) {
    console.log(data);
    return <h1>Error</h1>;
  }
  if (loading) return <h1>Loading ....</h1>;
  //   console.log(data);
  return (
    <div>
      <h1 className="display-4 my-3"> Launches </h1>
      <Missionkey />
      {data.launches.map((dat) => {
        return <Launchitem key={dat.flight_number} launch={dat} />;
      })}
    </div>
  );
}
