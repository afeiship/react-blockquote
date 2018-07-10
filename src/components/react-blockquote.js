import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
    };
  }

  render() {
    const { className, children, ...props } = this.props;
    return (
      <blockquote className={classNames('react-blockquote', className)} {...props}>
        { children }
      </blockquote>
    );
  }
}
