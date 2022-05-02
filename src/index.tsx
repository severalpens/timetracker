import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import Projects from './components/projects/Projects';
import Tasks from './components/tasks/Tasks';
import Entries from './components/entries/Entries';

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
