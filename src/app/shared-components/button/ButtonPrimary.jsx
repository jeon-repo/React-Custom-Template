import { Button } from 'antd';

function ButtonPrimary(props) {
  const { size, onClick, text, ...others } = props;
  return (
    <Button type='primary' size={size} onClick={onClick}>
      {text}
    </Button>
  );
}

export default ButtonPrimary;
