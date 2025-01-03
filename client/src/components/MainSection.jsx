// This contains the routes for the app and additional styling for the app depending on logged in state and path
import { useEffect ,useState } from 'react';
import { Header, Footer, Sidebar, MobileMenu } from '.';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Home, Login, Signup, NoMatch, Lessons, Characters, Report, Profile, QuizPage ,QuestionPage ,Aipage } from '../pages';

import Auth from '../utils/auth';
// import { HiraKataKanjiQuiz, VocabQuiz } from '../utils/quizGenerator';
import { hiraganaData, katakanaData, kanjiData, lessonData } from '../data';

const MainSection = () => {
  const loggedIn = Auth.loggedIn();
  // returns true if locations includes /quiz
  const quizLocation = useLocation().pathname.includes('/quiz');
  
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  const [dataFromChild, setDataFromChild] = useState('');
  const [dataFromSecond, setDataFromSecond] = useState('');
  const [vectorchild, setVectorchild] = useState([]);
  const handleDataChange = (childData) => {
    setDataFromChild(childData);
    navigate('/report');
  };

  const handleDatasecond = (childData) => {
    setDataFromSecond(childData);
    navigate('/ask');
  };

  const handlevectorData = (childData) => {
    setVectorchild(childData);
    
  };
 console.log("in main section",dataFromChild)
 console.log("in main section",vectorchild)
  return (
    <>
      {loggedIn && !quizLocation && <Sidebar />}
      <div
        className={`overflow-x-hidden overflow-y-auto flex flex-col ${
          loggedIn ? (quizLocation ? '' : 'mb-20 sm:mb-0 sm:ms-[88px] xl:ms-[300px]') : ''
        }`}
      >
        {!loggedIn && <Header />}
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/checkup"
              element={<Lessons  />}
            />
            <Route
              path="/ask"
              element={<Aipage data3={dataFromSecond} />}
            />
            {/* <Route
              path="/characters"
              element={<Characters />}
            /> */}
            <Route
              path="/report"
              element={<Report data1={dataFromChild} data2={vectorchild} data3={handleDatasecond}/>}
            />
             <Route
              path="/checkup/test"
              element={<QuestionPage data={lessonData} onDataChange={handleDataChange} onVectorChange={handlevectorData}/>}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            {/* <Route path="/quiz">
              <Route
                path="hiragana"
                element={
                  <QuizPage
                    quiz={
                      new HiraKataKanjiQuiz(
                        'hiragana',
                        hiraganaData.basic,
                        hiraganaData.diacritics,
                        hiraganaData.contracted
                      )
                    }
                  />
                }
              />
              <Route
                path="katakana"
                element={
                  <QuizPage
                    quiz={
                      new HiraKataKanjiQuiz(
                        'katakana',
                        katakanaData.basic,
                        katakanaData.diacritics,
                        katakanaData.contracted
                      )
                    }
                  />
                }
              />
              <Route path="kanji">
                {kanjiData.map((lesson) => (
                  <Route
                    key={lesson.url}
                    path={lesson.url}
                    element={<QuizPage quiz={new HiraKataKanjiQuiz('kanji', lesson.kanji)} />}
                  />
                ))}
              </Route>
              <Route path="lessons">
                {lessonData.map((lesson) => (
                  <Route
                    key={lesson.lessonUrl}
                    path={lesson.lessonUrl}
                  >
                    {lesson.lessonUnits.map((unit) => (
                      <Route
                        key={unit.unitUrl}
                        path={unit.unitUrl}
                        element={<QuizPage quiz={new VocabQuiz(unit.unitUrl, unit.unitContent)} />}
                      />
                    ))}
                  </Route>
                ))}
              </Route>
            </Route> */}
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>
        </main>
        {!quizLocation && <Footer />}
      </div>
      {loggedIn && !quizLocation && <MobileMenu />}
    </>
  );
};

export default MainSection;
