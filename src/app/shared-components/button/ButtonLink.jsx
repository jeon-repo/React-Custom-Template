import { Button } from 'antd';

function ButtonLink(props) {
  const { size, href, target, onClick, text, ...others } = props;
  return (
    <Button type='link' href={href} target={target} size={size} onClick={onClick}>
      {text}
    </Button>
  );
}

export default ButtonLink;
