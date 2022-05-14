import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import Projects from './components/Projects';
import Tasks from './components/Tasks';
import Records from './components/Records';

Amplify.configure(awsExports);

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/projects" element={<Projects />} />
  <Route path="/tasks" element={<Tasks />}/>
  <Route path="/records" element={<Records />}/>

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

reportWebVitals();
