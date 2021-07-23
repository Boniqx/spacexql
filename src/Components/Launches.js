import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_LAUNCHES } from "../GraphQL/Queries";
import { Box, Card, Title} from 'tailwind-react-ui'

function Launches() {
  const { data } = useQuery(LOAD_LAUNCHES);
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    if (data) {
      setLaunches(data.launchesPast);
    }
  }, [data]);

  return (
    <Box p={4} text="white" bg="black">
      <Title text="white" size={6}>Space X Missions</Title>
      {launches.map((data, key) => {
        return (<Card bg="black" border shadow maxW="sm" key={key} className="m-4 p-4">
          <h2> {data.mission_name} </h2>
          <p> <b>Launch Date:</b> {data.launch_date_local} </p>
          <p> <b>Launch Site:</b> {data.launch_site.site_name_long} </p>
          {data.ships.length !== 0 && <p> <b>Ships:</b> </p>}
          <ul className="list-disc ml-6">
          {data.ships.map((ship, key) => {
            return <li key={key}>{ship.name}</li>
          })
          }
          </ul>
        </Card>);
      })}
    </Box>
  );
}

export default Launches;
