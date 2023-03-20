import TextInput from 'app/shared-components/input/TextInput';
import withReducer from 'app/store/withReducer';
import withRouter from 'app/util/withRouter';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import reducer from './store';
import { setTest } from './store/subSlice';

function Sub({ navigate }) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  return (
    <div>
      <p>p</p>
      <span>span</span>
      <br />
      <strong>strong</strong>
      <br />
      <TextInput maxLength={10} value={text} onChange={(e) => setText(e.target.value)} />
      <button
        type='button'
        onClick={() => {
          dispatch(setTest(text));
        }}>
        저장
      </button>
      <br />
      <button type='button' onClick={() => navigate('/main')}>
        메인으로 이동
      </button>
    </div>
  );
}

// dynamic reducer 적용
// router와 reducer 중복 사용되는 경우
// router > reducer > component
export default withRouter(withReducer('subReducer', reducer)(Sub));
