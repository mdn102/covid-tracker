import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Router from 'next/router';
import Link from 'next/link';

const Mapping = () => {

  //   const data = [
  //     {
  //       location: [47.4853073,-122.1671]
  //       infectedType: red
  //     },
  //     {
  //       location: [44.4853073,-139.1671]
  //       infectedType: red
  //     },
  //     {
  //       location: [42.4853073,-182.1671]
  //       infectedType: yellow
  //     },
  //     {
  //       location: [35.4853073,-132.1671]
  //       infectedType: yellow
  //     },
  //     {      
  //       location: [48.4853073,-128.1671]
  //       infectedType: green
  //     },
  //     {     
  //       location: [45.4853073,-122.1671]
  //       infectedType: green
  //     }
  //  ];


  return (
    <div className="jumbotron p-0">
      <div className="view overlay rounded-top">
          <img src="image/getty-crowd.jpg" className="img-fluid" alt="getty crowd image" />
          <a href="#">
            <div className="mask rgba-white-slight"></div>
          </a>
      </div>
      <style jsx>{`
        .jumpotron {
          margin: 0px auto;
          text-align: center;
        }
        .img-fluid {
          width: 100%;
          height: 200px;
          text-align: center;
        }
      `}</style>
    </div>

  );
};

export default Mapping;
