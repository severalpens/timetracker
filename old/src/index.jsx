import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import {Amplify} from "aws-amplify";
import awsExports from "./aws-exports";
import './index.scss';
import TableTasks from './components/TableTasks';
import Notes from './components/Notes';
import Categories from './components/Categories';
import Entries from './components/Entries';

Amplify.configure(awsExports);

const container = document.getElementById('root');
const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
      <Route path="categories" element={<Categories/>} />
      <Route path="tasks" element={<TableTasks />} />
      <Route path="entries" element={<Entries />} />

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

