import { Button } from 'antd';
import ButtonLink from './ButtonLink';
import ButtonPrimary from './ButtonPrimary';
import ButtonDashed from './ButtonDashed';
import ButtonText from './ButtonText';

function PButton(props) {
  const { type = 'primary', ...others } = props;

  switch (type) {
    case 'primary':
      return <ButtonPrimary {...others}>{props.text}</ButtonPrimary>;
    case 'link':
      return <ButtonLink {...others}>{props.text}</ButtonLink>;
    case 'dashed':
      return <ButtonDashed {...others}>{props.text}</ButtonDashed>;
    case 'text':
      return <ButtonText {...others}>{props.text}</ButtonText>;
    default:
      return <Button {...others}>{props.text}</Button>;
  }
}

export default PButton;
