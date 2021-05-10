import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

interface SelectProps {
    input: {
        label: String,
        placeholder: String,
        value: String,
        id: String,
        styleType: any,
        updateValue: Function
    },
    select: {
        options: any[],
        defaults: any[],
        value: String | Number,
        updateValue: Function

    }
}

export default function SelectInput(props: SelectProps) {
  const classes = useStyles();

  return (
    <div>
         <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id={props.input.label  + "-" +  props.input.id}> {props.input.label}</InputLabel>
        <Select
          labelId={props.input.label + "-" + props.input.id}
          id={props.input.id}
          value={props.select.value}
          onChange={props.select.updateValue}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
