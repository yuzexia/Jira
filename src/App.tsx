
/*
 * @Author: yuze.xia 
 * @Date: 2021-10-06 13:38:16 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2021-10-07 16:54:29
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from 'screens/project-list';
import { LoginScreen } from 'screens/login';

function App() {
  return (
    <div className="App">
      <LoginScreen />
      {/* <ProjectListScreen /> */}
    </div>
  );
}

export default App;
