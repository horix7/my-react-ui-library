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
        id: string,
        styleType: any,
        updateValue: Function
    },
    select: {
        defaults: {
            value: String | Number,
            label: String | Number 
        },
        options:[{[key: string] : any }],
        value: String | Number,
        updateValue: any

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
            <em>{props.select.defaults.label}</em>
          </MenuItem>
          {props.select.options.map((element, index) => <MenuItem key={index} value={element.value}>{ element.label } </MenuItem> )}

        </Select>
      </FormControl>
    </div>
  );
}
