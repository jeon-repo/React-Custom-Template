const { Button } = require('@mui/material');

function ButtonContained(props) {
  const { className, onClick, text, ...others } = props;
  return (
    <Button
      className={className}
      variant='contained'
      sx={{
        width: '4rem',
        height: '3rem',
      }}
      onClick={onClick}>
      {text}
    </Button>
  );
}

export default ButtonContained;
