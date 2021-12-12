import React, { useState } from 'react';
import PropTypes from 'prop-types';
import nextId from 'react-id-generator';

const Input = (props) => {
  const [id] = useState(nextId());
  const {
    name,
    value,
    large,
    type,
    onChange,
    placeholder,
    title,
    prepend,
    append,
    hideLabel,
    disableAutoComplete,
    onKeyPress,
    onKeyDown,
    tabIndex,
    errorText,
    required,
    onFocus,
    onBlur,
    maxLength,
    warning,
  } = props;

  let className = 'form-control';
  if (errorText) {
    if (warning) {
      className += ' is-warning';
    } else {
      className += ' is-invalid';
    }
  }

  if (large === true && !prepend && !append) {
    className += ' form-control-lg';
  }

  const labelClassName = hideLabel === true ? 'sr-only' : '';

  let inputGroupClassName = 'input-group';
  if (large === true) {
    inputGroupClassName += ' input-group-lg';
  }

  const opts = {
    className,
    id,
    name,
    type: type || 'text',
    value: value || '',
    placeholder: placeholder || '',
  };

  if (maxLength) {
    opts.maxLength = maxLength;
  }

  if (required === true) {
    opts.required = true;
  }

  if (disableAutoComplete) {
    opts.autoComplete = 'off';
  }

  if (tabIndex) {
    opts.tabIndex = tabIndex;
  }

  if (onChange && onChange instanceof Function) {
    opts.onChange = onChange;
  }

  if (onKeyPress && onKeyPress instanceof Function) {
    opts.onKeyPress = onKeyPress;
  }

  if (onKeyDown && onKeyDown instanceof Function) {
    opts.onKeyDown = onKeyDown;
  }

  if (onFocus && onFocus instanceof Function) {
    opts.onFocus = onFocus;
  }

  if (onBlur && onBlur instanceof Function) {
    opts.onBlur = onBlur;
  }

  const input = <input {...opts} />;

  return (
    <div className="form-group">
      <label htmlFor={opts.id} className={labelClassName}>
        {title}
      </label>
      {prepend || append ? (
        <div className={inputGroupClassName}>
          {prepend && <div className="input-group-prepend">{prepend}</div>}
          {input}
          {append && <div className="input-group-append">{append}</div>}
          {errorText && <div className={warning ? 'warning' : 'invalid-feedback'}>{errorText}</div>}
        </div>
      ) : (
        input
      )}
      {errorText && <div className="invalid-feedback">{errorText}</div>}
    </div>
  );
};
/* eslint-disable */
Input.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  value: PropTypes.any,
  type: PropTypes.oneOf(['text', 'email', 'date', 'number', 'search']),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  prepend: PropTypes.element,
  large: PropTypes.bool,
  append: PropTypes.element,
  hideLabel: PropTypes.bool,
  disableAutoComplete: PropTypes.bool,
  tabIndex: PropTypes.number,
  errorText: PropTypes.string,
  required: PropTypes.bool,
  onKeyPress: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
