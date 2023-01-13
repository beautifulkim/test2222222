import React from 'react';

const Qna = ( props ) => {
    return (
        <div style={{ height: 800}} className='pt-5'>
            <h2 className='pt-5 mt-5 text-center'>{ props.title }</h2>

            <form action="" method='post' name='qna'>
                {/* 웹표준 잘 안되는 select 박스를 안쓰고 div 태그로 ui구현하고
                자바스크립트 값을 타입이 hidden인 input 에 담아 보낸다.  */}
                <input type='hidden' name='selectdb' ></input>

                <dl className="d-flex flex-wrap col-md-8 mx-auto">
                    <dt className="col-2 border-bottom">성함</dt>
                    <dd className="col-10 border-bottom">
                        <input type='text' name='younm' title='성함' />
                        <span className='d-none text-warning'>한글 이름만 가능합니다.</span>
                    </dd>
                    <dt className="col-2 border-bottom">타이틀</dt>
                    <dd className="col-10 border-bottom">input</dd>
                    <dt className="col-2 border-bottom">타이틀</dt>
                    <dd className="col-10 border-bottom">input</dd>
                    <dt className="col-2 border-bottom">타이틀</dt>
                    <dd className="col-10 border-bottom">input</dd>
                </dl>

                <input type='submit' value='보내기'></input>
            </form> 
        </div>
    );
}

export default Qna;

