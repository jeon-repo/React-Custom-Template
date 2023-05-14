import { Button } from 'antd';

function ButtonText(props) {
  const { size, onClick, text, ...others } = props;
  return (
    <Button type='text' size={size} onClick={onClick}>
      {text}
    </Button>
  );
}

export default ButtonText;
