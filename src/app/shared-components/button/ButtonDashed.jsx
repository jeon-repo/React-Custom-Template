import { Button } from 'antd';

function ButtonDashed(props) {
  const { size, onClick, text, ...others } = props;
  return (
    <Button type='dashed' size={size} onClick={onClick}>
      {text}
    </Button>
  );
}

export default ButtonDashed;
