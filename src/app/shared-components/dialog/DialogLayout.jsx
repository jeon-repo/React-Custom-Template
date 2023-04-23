/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { closeDialog, getDialogOptions, getDialogState } from 'app/store/dialogSlice';
import { useDispatch, useSelector } from 'react-redux';

function DialogLayout() {
  const dispatch = useDispatch();
  const state = useSelector(getDialogState);
  const { content } = useSelector(getDialogOptions);

  return (
    <div style={{ display: state ? 'block' : 'none' }}>
      <div
        style={{
          position: 'fixed',
          backgroundColor: 'transparent',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          width: '100vw',
          height: '100vh',
        }}
        onClick={() => dispatch(closeDialog())}
      />
      <div>{content}</div>
    </div>
  );
}

export default DialogLayout;
