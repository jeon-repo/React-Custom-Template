/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Modal } from 'antd';
import { closeDialog, getDialogOptions, getDialogState } from 'app/store/dialogSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PButton from '../button/PButton';

function DialogLayout() {
  const dispatch = useDispatch();
  const state = useSelector(getDialogState);
  const options = useSelector(getDialogOptions);

  const onClose = useCallback(() => {
    dispatch(closeDialog());
  }, [dispatch]);

  return (
    <Modal
      title={options.title}
      open={state}
      centered
      onCancel={onClose}
      onOk={onClose}
      footer={options.event.map((e, idx) => (
        <PButton
          key={e.title}
          text={e.title}
          onClick={e.onClick === 'close' ? onClose : e.onClick}
        />
      ))}>
      {options.content}
    </Modal>
  );
}

export default DialogLayout;
