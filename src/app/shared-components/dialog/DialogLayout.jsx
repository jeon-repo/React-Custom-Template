/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { closeDialog, getDialogOptions, getDialogState } from 'app/store/dialogSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PButton from '../button/PButton';

function DialogLayout(props) {
  const { className } = props;
  const dispatch = useDispatch();
  const state = useSelector(getDialogState);
  const options = useSelector(getDialogOptions);

  const onClose = useCallback(() => {
    dispatch(closeDialog());
  }, [dispatch]);

  return (
    <Dialog
      open={state}
      onClose={onClose}
      className={className}
      scroll={options.scroll}
      {...options}>
      <DialogTitle className='w-100 h-100' onClose={null}>
        {options.title}
      </DialogTitle>
      <DialogContent className='w-100 h-100'>{options.content}</DialogContent>
      <DialogActions>
        {options.event.map((e, idx) => (
          <PButton
            key={e.title}
            text={e.title}
            onClick={e.onClick === 'close' ? onClose : e.onClick}
          />
        ))}
      </DialogActions>
    </Dialog>
  );
}

export default DialogLayout;
