import React from 'react';
import dataItems from '../../dataItems';
import ProjItem from '../components/projItem';
import Navbar from '../components/Navbar';
import './Style.css';

const Project = () => {
  let mykey = 'Ab24c1';

  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>
      <section id="my-projects">
        {
        dataItems.map((item) => {
          mykey += 1;
          return (
            <ProjItem myProj={item} key={mykey} />
          );
        })
      }
      </section>
    </div>
  );
};

export default Project;
