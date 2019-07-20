import * as React from "react";
import styled from "styled-components";
import { LaunchListQuery } from "../../generated/graphql";



export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
  data: LaunchListQuery
}

const LaunchListDiv = styled.div`
  height: 100vh;
  overflow: hidden auto;
  background-color: #ececec;
  width: 300px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Heading = styled.p`
  font-size: 20px;
`;

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #919191;
  cursor: pointer;
`;

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (
  <LaunchListDiv>
    <Heading>Launches</Heading>
    <List>
      {!!data.launches &&
        data.launches.map(
          (launch, index) =>
            !!launch && (
              <ListItem key={index} onClick={() => handleIdChange(launch.flight_number!)}>
                {launch.mission_name} ({launch.launch_year})
              </ListItem>
            ),
        )}
    </List>
  </LaunchListDiv>
);

export default LaunchList;
