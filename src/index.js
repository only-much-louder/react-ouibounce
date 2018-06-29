import React from 'react'
import PropTypes from 'prop-types';
import ouibounce from 'ouibounce'

class ReactOuibounce extends React.Component {

  static propTypes = {
    sensitivity : PropTypes.number,
    aggressive : PropTypes.bool,
    timer : PropTypes.number,
    delay : PropTypes.number,
    cookieExpire : PropTypes.number,
    cookieName : PropTypes.string,
    cookieDomain : PropTypes.string,
    sitewide : PropTypes.bool,
  }

  state = {
    open : false,
    handler : null,
  }

  setupOuibounce = () => {
    const handlerRef = ouibounce(false, {
      ...this.props,
      callback : () => {
        return this.setState({
          open : true,  // open the modal,
        });
      }
    })
    this.setState({
      handler : handlerRef
    })
  }

  handleDismiss = () => {
    // disable the ouibounce when child modal
    // is closed
    if (this.state.handler) {
      this.state.handler.disable()
    }
    this.setState({
      open : false,
    })
  }

  componentDidMount() {
    this.setupOuibounce()
  }

  componentWillUnmount(){
    // disable the ouibounce on unmount
    if (this.state.handler) {
      this.state.handler.disable()
    }
  }

  render() {
    // can deal with only one child
    const childEl = React.Children.only(this.props.children)
    const childElWithModalState = React.cloneElement(childEl, {
      shouldDisplay : this.state.open,
      handleDismiss : this.handleDismiss,
    })
    return childElWithModalState
  }
}

export default ReactOuibounce;
