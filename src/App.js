import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Quick from './component/Quick';
import Notice from './component/Notice';
import Navi from './component/Navi';
import About from './component/About';
import Qna from './component/Qna';


function App() {
 
  const [open, setToggle] = useState(true);
  return (
    <div className={ open ? "body openpopup" : "body" }>
      <div id="pop">
        <button onClick={ () => { setToggle(!open) } }>닫기</button>
        <p>화면 정가운데</p>
      </div> 
      <Navi></Navi>
      <section>
        <Routes>
          <Route path="/about" element={ <About title='뇌새김이란?'></About> }></Route>
          <Route path="/contact" element={ <Qna title='문의하기'></Qna> }></Route>
        </Routes>
      </section>
      <Quick></Quick> 
      <Notice title="공지사항"></Notice>
    </div>
  );
}

export default App;
