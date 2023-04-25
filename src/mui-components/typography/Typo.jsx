import { Typography } from '@mui/material';

function Typo(props) {
  const { type, className, align, children, ...others } = props;
  console.log('##### -> ', props);
  return (
    <Typography {...others} className={`${className || ''}`}>
      {children}
    </Typography>
  );
}

export default Typo;
