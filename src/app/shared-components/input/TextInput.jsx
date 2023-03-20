function TextInput(props) {
  const { maxLength = null, className, helperText, helperSx, align, ...others } = props;

  return (
    <input
        {...others}
        maxLength={maxLength}
        className={`${className}`}
        style={{ textAlign: align }}
      />
  );
}

export default TextInput;
