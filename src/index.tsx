import React from 'react';
import * as ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import Navbar from './components/Navbar';
import Projects from './components/projects/Projects';
import Tasks from './components/tasks/Tasks';
import Entries from './components/entries/Entries';
import Questions from './components/quizzes/DP-900/Questions.jsx';

Amplify.configure(awsExports);

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/tasks" element={<Tasks/>}/>
  <Route path="/entries" element={<Entries/>}/>
  <Route path="/azure/questions" element={<Questions/>}/>
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Route>
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
