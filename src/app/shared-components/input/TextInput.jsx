import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

function TextInput(props) {
  const { maxLength = null, className, helperText, helperSx, align, variant, ...others } = props;

  return (
    <FormControl variant={variant} error={others.error} fullWidth={others.fullWidth}>
      <TextField
        {...others}
        inputProps={{ maxLength }}
        variant={variant}
        className={className}
        sx={{ textAlign: align }}
      />
      <FormHelperText id='error-text' sx={{ width: helperSx || '100%' }}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
}

export default TextInput;
