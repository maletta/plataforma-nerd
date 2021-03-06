import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  padding: 50px;
  display: flex;
  justify-content: center;
`;

const Video = styled.video`
      width: 320px;
      height: 240px;

  @media (min-width: 650px) {
    width: 100%;
    height: 60%;
  }

`;

const VideoContainer = () => (
  <Container>
    <Video controls>
      <source width="320" height="240" src="/video.mp4" type="video/mp4" />
    </Video>

  </Container>
);

export default VideoContainer;
