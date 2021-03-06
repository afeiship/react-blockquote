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
  /*===properties end===*/

  render() {
    const { className, ...props } = this.props;
    return (
      <blockquote className={classNames('react-blockquote', className)} {...props} />
    );
  }
}
