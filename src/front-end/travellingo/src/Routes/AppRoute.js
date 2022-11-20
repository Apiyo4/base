import React, { useEffect } from 'react';
import {
  Route,
  Redirect,
  Routes,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import SignUpPage from '../Pages/SignUpPage';
import GamePage from '../Pages/GamePage';
import LoginPage from '../Pages/LoginPage';
import QuizPage from '../Pages/QuizPage';
import ContentPage from '../Pages/ContentPage';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="signup" exact element={<SignUpPage />} />
        <Route path="login" exact element={<LoginPage />} />
        <Route path="quiz" exact element={<QuizPage />} />
        <Route path="content" exact element={<ContentPage />} />
        <Route path="game" exact element={<GamePage />} />
      </Routes>
    </>
  );
}
