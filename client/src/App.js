import { GlobalStyle } from './assets/styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/variables.css';

import { HomePage } from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { QuestionPage } from './pages/QuestionPage';
import { QuestionWritePage } from './pages/QuestionWritePage';
import { QuestionEditPage } from './pages/QuestionEditPage';
import { AnswerEdit } from './pages/AnswerEdit';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/login" element={<Login />} />\
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/questions/:id" element={<QuestionPage />} />
          <Route path="/questions/ask" element={<QuestionWritePage />} />
          <Route path="/questions/edit/:id" element={<QuestionEditPage />} />
          <Route
            path="/questions/:id/answer/edit/:id"
            element={<AnswerEdit />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
