import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';
import Mapping from '../components/Mapping';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div>
      <Nav />
      <Mapping />
      <style jsx>{`
      .view {
        text-align: center;
        // margin-top: 0px;
        // width: 1200px;
        // height: 500px;
      }
    `}</style>
    </div>

  );
}
