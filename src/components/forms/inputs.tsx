import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);



interface InputProps {
    input?: {
        label?: String,
        placeholder?: String,
        value?: String,
        styleType?: any,
        updateValue?: Function
    }
}

export default function BasicTextFields(props: InputProps) {
  const classes = useStyles();
  const inputTypes: any[] = ["", "filled", "outlined"]

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label={props.input?.label} variant={inputTypes[props.input?.styleType]} />
    </form>
  );
}
