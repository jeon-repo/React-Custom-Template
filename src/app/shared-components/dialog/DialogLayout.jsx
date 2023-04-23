import { getDialogOptions, getDialogState } from 'app/store/dialogSlice';
import { useSelector } from 'react-redux';

function DialogLayout() {
  const state = useSelector(getDialogState);
  const { content } = useSelector(getDialogOptions);

  return <div style={{ display: state ? 'block' : 'none' }}>{content}</div>;
}

export default DialogLayout;
