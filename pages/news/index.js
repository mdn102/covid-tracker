import React from 'react'
import Nav from '../../components/Nav'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Router from 'next/router';
import Link from 'next/link';

const newsPage = () => {
  return (
    <div>
      <Nav />
      <div className="jumbotron p-0">
        <h1 className="card-title h1 pb-2"><strong>Update lastest status of COVID19 in WASHINGTON </strong></h1> 
        <div className="view overlay rounded-top">
          <img src="image/covid_tracking.png" className="img-fluid" alt="covid tracking image" />
          <a href="#">
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>
        <div className="card-body text-center mb-3">
          <h2 className="card-title h2 my-2"><strong>Socia Media</strong></h2>
          <p class="card-text py-2">Follow us on social media to update the news.</p>
          {/* <a href="#" className="btn purple-gradient btn-rounded mb-4">Follow</a> */}
          <a className="fa-lg p-2 m-2 li-ic"><i class="fab fa-linkedin-in blue-text"></i></a>       
          <a className="fa-lg p-2 m-2 tw-ic"><i class="fab fa-twitter blue-text"></i></a>        
          <a className="fa-lg p-2 m-2 fb-ic"><i class="fab fa-facebook-f blue-text"></i></a>
        </div>
      </div>
      <style jsx>{`
        .jumpotron {
          margin: 50px auto;
          text-align: center;
          color: violet;
        }
        .card-title {
          text-align: center;
          color: violet;
        }
        .img-fluid {
          width: 100%;
          height: 100%;
          text-align: center;
          // margin: 50px auto;
        }
        p {
          font-size: 30px;
        }
      `}</style>
    </div>
  )
}

export default newsPage