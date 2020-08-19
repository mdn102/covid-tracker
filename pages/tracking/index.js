import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import Nav from '../../components/Nav';
import useStats from '../../utils/useStats';
import Stats from '../../components/Stats';
import CountrySelector from '../../components/CountrySelector';
import ChartRate from '../../components/ChartRate';



const GlobalStyle = createGlobalStyle`
    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;


export default function tracking() {
    return (
        <div>
            <Nav />
            <h1 className="title"><span> Updates COVID-19 Worldwide </span></h1>
            <GlobalStyle />
            <Stats url="https://covid19.mathdro.id/api" />
            <CountrySelector />
            <ChartRate />
            <style jsx>{`
                .title {
                    text-align: center;
                    color: blue;
                    font-size: 50px;
                }
            `}</style>
        </div>
    );
}
