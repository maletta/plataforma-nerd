import React from 'react';
import styled from 'styled-components';
import Main from 'components/Main';
import Title from 'components/Title';
import VideoContainer from 'components/VideoContainer';

const Index = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

`;


export default function Home() {
  return (
    <Index>
      <Main>
        <Title />
        <VideoContainer />
      </Main>
    </Index>
  );
}
