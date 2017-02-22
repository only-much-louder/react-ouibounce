import React from 'react'
import { render } from 'react-dom'

import ReactOuibounce from '../../src'

const TestModal = (props) => (
  <div>
    <p>
      Hi, don't leave please - {`${props.shouldDisplay}`}
    </p>
  </div>
)

class Demo extends React.Component {
  render() {
    return (
      <ReactOuibounce
        cookieName="test-event"
        cookieExpire={600}
      >
        <TestModal />
      </ReactOuibounce>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
