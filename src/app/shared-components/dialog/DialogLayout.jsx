/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { closeDialog, getDialogOptions, getDialogState } from 'app/store/dialogSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DialogLayout() {
  const dispatch = useDispatch();
  const state = useSelector(getDialogState);
  const options = useSelector(getDialogOptions);

  const onClose = useCallback(() => {
    dispatch(closeDialog());
  }, [dispatch]);

  return (
    <div
      style={{
        display: state ? 'flex' : 'none',
        zIndex: 1,
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}>
      <div
        style={{
          position: 'fixed',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,
          width: '100vw',
          height: '100vh',
        }}
        onClick={onClose}
      />
      <div style={{ zIndex: 999, width: '10rem', heigth: '10rem' }}>
        <div>{options.title}</div>
        <div>{options.content}</div>
        <div>
          {options.event.map((e, idx) => (
            <button
              key={e.title}
              type='button'
              onClick={e.onClick === 'close' ? onClose : e.onClick}>
              {e.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DialogLayout;
