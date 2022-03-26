/*eslint-disable*/ 

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  // function 반복된UI(){

  //   var 어레이 = [];
  //   for (var i = 0; i < 3; i++){
  //     어레이.push(<div>안녕</div>);
  //   }
  //   return 어레이
  // }

  function 제목바꾸기() {
    // state 복사본 만들어서 수정하기 deep copy (<= array나 object) 값공유x 서로 독립적인 값을 가지는 복사.
    // .... => 글제목 배열의 중괄호 대괄호 다 제거해주고 새로운 괄호에 넣어준다
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }
  
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>

      {
        글제목.map( (글) => {
          return (
          <div className='list'>
            <h3> { 글 } </h3>
            {/* <span onClick={() => { 따봉변경(따봉+1);} }>👍</span> {따봉}  */}
            <p>2월 19일 발행</p>
            <hr/>
          </div>
          )
        })
      }

      {/* {반복된UI()} */}

      <button  onClick={ () =>{ modal변경(!modal)} }> 열고 닫기 </button>
      {modal === true ? <Modal/> : null}
      
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
