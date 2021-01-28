import React from 'react'

import './App.css';

import {AboutMe} from './components/AboutMe'
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';

export const App = () => {
  return (
    <div className="App">
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Contact/>
      </div>
  );
}
