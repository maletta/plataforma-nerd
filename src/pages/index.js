import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
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
    <>
      <Head>
        <title>Arya Gameplays</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:site_name" content="@camilahipolito" />
        <meta name="og:title" property="og:title" content="Arya GamePlays" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Nbesq corporation" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content="https://plataforma-nerd.vercel.app/nbesq.png" />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Arya GamePlays" />
        <meta name="twitter:text:title" content="@camilahipolito" />
        <meta name="twitter:description" content="Nbesq corporation" />
        <meta name="twitter:image" content="https://plataforma-nerd.vercel.app/nbesq.png" />
      </Head>
      <Index>
        <Main>
          <Title />
          <VideoContainer />
        </Main>
      </Index>
    </>
  );
}
