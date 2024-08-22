import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((child, childIndex) => (
              <Route
                key={childIndex}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  </StrictMode>
);
