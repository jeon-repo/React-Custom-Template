import TextInput from 'app/shared-components/input/TextInput';
import { setRemember } from 'app/store/rememberSlice';
import withRouter from 'app/util/withRouter';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Main({ navigate }) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  return (
    <div>
      <div>main</div>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <TextInput maxLength={10} value={text} onChange={(e) => setText(e.target.value)} />
      <button
        type='button'
        onClick={() => {
          dispatch(setRemember(text));
        }}>
        저장
      </button>
      <br />
      <button type='button' onClick={() => navigate('/sub')}>
        서브로 이동
      </button>
    </div>
  );
}

export default withRouter(Main);
