import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from '../../components/Nav';

const donate = () => {
  return (
    <div>
      <Nav />
      <div className="jumbotron p-0">
        <div className="view overlay rounded-top">
          <div className="card-body text-center mb-3">
            <h2 className="card-title h3 my-4"><strong>Donate</strong></h2>
            <p className="card-text py-2">Help prevent the spread of COVID-19 in King County, WA</p>
            <a href="http://www.seattle.gov/services-and-information/volunteering-and-participating" className="btn purple-gradient btn-rounded mb-4">Volunteer & Participating</a>
          </div>
          <a href="http://www.seattle.gov/services-and-information/volunteering-and-participating">
            <div className="mask rgba-white-slight">
              <img src="image/covid19-response.png" className="img-fluid" alt="covid response" />
            </div>
          </a>
        </div>
      </div>    
      <style jsx>{`
        .jumpotron {
          // width: 100%;
          // height: 50vh;
          text-align: center;
          margin: 50px auto;
        }
        .img-fluid {
          width: 100%;
          height: 100%;
          text-align: center;
          // margin: 50px auto;
        }
        p {
          font-size: 20px;
        }
        .btn {
          background-color: green;
          border: 2px solid;
        }
      `}</style>
    </div>
  );
};
export default donate;