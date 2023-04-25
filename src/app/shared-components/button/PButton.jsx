import ButtonContained from './ButtonContained';
import ButtonOutlined from './ButtonOutlined';

// Primary Button
function PButton(props) {
  const { variant = 'contained', ...others } = props;
  if (variant === 'contained') {
    return <ButtonContained {...others}>{props.text}</ButtonContained>;
  }
  return <ButtonOutlined {...others}>{props.text}</ButtonOutlined>;
}

export default PButton;
