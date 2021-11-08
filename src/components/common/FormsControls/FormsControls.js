import React from "react";
import classes from "./FormsControls.module.css";

const FormControl = ({ input, meta: {touched, error}, children, ...props }) => {

    const hasError = touched && error;

    return (
        <div className={classes.form_control + ' ' + (hasError ? classes.error : '')} >
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div >
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <textarea {...props.input} {...restProps} />
        </FormControl>
    )
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}