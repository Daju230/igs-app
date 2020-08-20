import Layout from '../components/layout';
import Link from 'next/link';
import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => (
    <Layout>
    <div className="container">

      <main>
        <h1 className="title">
          Island Glass Quote Calculator
        </h1>

        <p className="description">
          Get started by clicking product type below
        </p>

        <div className="grid">
          <Link href="/IG">
          <a className="card">
            <h3>Insulated Glass &rarr;</h3>
          </a>
          </Link>
          <Link href="/SP">
          <a className="card">
            <h3>Single Pane Glass &rarr;</h3>
          </a>
          </Link>
        </div>
      </main>

      <footer>
       <p>Created by Ian Joujan</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        header {
          display:block;
          position:absolute;
          right:50px;
          top:50px;
          z-index:200;
        }
        .menu {
          width: 35px;
          height: 5px;
          background-color: black;
          margin: 6px 0;
        }
        .title a {
          color: #252627;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1.5rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #252627;
          border-color: #4B88A2;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        .button {
          border: none,
          background: #404040,
          color: #ffffff,
          font-weight: 100,
          padding: 20px,
          text-transform: uppercase,
          border-radius: 6px,
          display: inline-block,
          transition: all 0.3s ease 0s,
        }
        .button:hover {
          color: #404040,
          font-weight: 700,
          letter-spacing: 3px,
          background: none,
          -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57),
          -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57),
          transition: all 0.3s ease 0s;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    </Layout>
  );


export default Home