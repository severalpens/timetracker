

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import Projects from './components/Projects';
import Tasks from './components/Tasks';
import Protected from './SignOut';
import Records from './components/Records';
import TimerWrapper from './components/TimerWrapper';
import './index.css';
import SignOut from './SignOut';
import Navbar from './components/navbar/Navbar';

Amplify.configure(awsExports);

const root = createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/records" element={<Records />} />
        <Route path="/timer" element={<TimerWrapper />} />
        <Route path="/signout" element={<SignOut />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();



export default App;
