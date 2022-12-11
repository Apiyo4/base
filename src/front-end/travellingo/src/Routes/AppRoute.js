import React, { useEffect } from 'react';
import {
  Route,
  Redirect,
  Routes,
  useLocation,
  useRouteMatch,
  Navigate,
} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import SignUpPage from '../Pages/SignUpPage';
import GamePage from '../Pages/GamePage';
import LoginPage from '../Pages/LoginPage';
import QuizPage from '../Pages/QuizPage';
import ContentPage from '../Pages/ContentPage';
import Numbers from '../Pages/Content/Numbers';
import Greetings from '../Pages/Content/Greetings';
import CommonWords from '../Pages/Content/CommonWords';
import Foods from '../Pages/Content/Foods';
import Directions from '../Pages/Content/Directions';
import GuruTools from '../Pages/GuruTools';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="signup" exact element={<SignUpPage />} />
        <Route path="login" exact element={<LoginPage />} />
        <Route path="quiz" exact element={<QuizPage />} />
        <Route path="content" exact element={<ContentPage />} />
        <Route path="content/numbers" exact element={<Numbers />} />
        <Route path="content/greetings" exact element={<Greetings />} />
        <Route path="content/common_words" exact element={<CommonWords />} />
        <Route path="content/foods" exact element={<Foods />} />
        <Route path="content/directions" exact element={<Directions />} />
        <Route path="game" exact element={<GamePage />} />
        {localStorage.hasOwnProperty('token') && (
          <Route path="/guru" element={<GuruTools />} />
        )}
      </Routes>
    </>
  );
}
