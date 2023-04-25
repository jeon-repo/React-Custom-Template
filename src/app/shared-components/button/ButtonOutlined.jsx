const { Button } = require('@mui/material');

function ButtonOutlined(props) {
  const { className, onClick, text, ...others } = props;
  return (
    <Button
      className={className}
      variant='outlined'
      sx={{
        width: '4rem',
        height: '3rem',
      }}
      onClick={onClick}>
      {text}
    </Button>
  );
}

export default ButtonOutlined;
