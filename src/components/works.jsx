import React from 'react';
import { NavLink } from 'react-router-dom';

import dataItems from '../../miniData';
import WorkItem from './workItem';

export default function Works() {
  let mykey = 0;
  return (
    <section id="work">
      <h1 style={{ textAlign: 'center' }}>Projects</h1>
      {
        dataItems.map((item) => {
          mykey += 1;
          return (
            <WorkItem myProj={item} key={mykey} />
          );
        })
      }
      <center>
        <NavLink to="/project" data-aos="fade-left" className="waves-effect waves-light btn teal darken-4 showall">
          <i className="material-icons right">featured_play_list</i>
          More Projects
        </NavLink>
      </center>
    </section>
  );
}
