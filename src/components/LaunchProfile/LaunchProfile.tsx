import * as React from 'react';
import styled from 'styled-components'
import { LaunchProfileQuery } from '../../generated/graphql';

interface Props {
    data: LaunchProfileQuery
}

const LaunchProfileContainer = styled.div`
height: 100vh;
max-height: 100%;
width: calc(100vw - 300px);
overflow: hidden auto;
padding-left: 20px;
padding-right: 20px;
`

const LaunchProfileStatus = styled.div`
margin-top: 40px;
`
const Success = styled.p`
color: #2cb84b;

`

const Failed = styled.p`
color: #ff695e;

`
const LaunchProfileTitle = styled.p`
font-size: 20px
margin-top: 0;
margin-bottom: 4px;
`
const LaunchDescription = styled.p`
color: red;
`
const ImageList = styled.p`
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(2, 1fr);
margin-top: 40px;
padding-bottom: 100px;
`

const LaunchImage = styled.img`
width: 100%;
`

const LaunchProfile: React.FC<Props> = ({data}) =>{
    if(!data.launch){
        return <div>No launch available</div>
    }

    return(
<LaunchProfileContainer>
    <LaunchProfileStatus>
        <span>Flight {data.launch.flight_number}:</span>
        {data.launch.launch_success ? (
            <Success>Success</Success>
        ) : ( <Failed>Failed</Failed>)} 
    </LaunchProfileStatus>
    <LaunchProfileTitle>
        {data.launch.mission_name}
        {data.launch.rocket && `(${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
    </LaunchProfileTitle>
    <LaunchDescription>{data.launch.details}</LaunchDescription>
    {!!data.launch.links && !!data.launch.links.flickr_images && (
        <ImageList>
            {data.launch.links.flickr_images.map(image => image ? <LaunchImage src={image} key={image}/> : null)}
        </ImageList>
    )}
</LaunchProfileContainer>
    )
}

export default LaunchProfile