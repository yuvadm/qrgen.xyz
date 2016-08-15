import React from 'react'
import ReactDOM from 'react-dom'
import QRious from 'qrious'

import './base.scss'

class Qrgen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      text: 'Hello World!',
      size: 100
    }
  }

  componentDidMount () {
    this.qr = new QRious({
      element: this.refs.qr,
      value: this.state.text,
      size: this.state.size
    })
  }

  componentDidUpdate (prevProps, prevState) {
    this.qr.value = this.state.text
    this.qr.size = this.state.size
  }

  render () {
    return <div id='root'>
      <h1>qrgen</h1>
      <canvas ref='qr' id='qr'></canvas>
      <input type='text' value={this.state.text} onChange={(e) => {
        this.setState(Object.assign({}, this.state, { text: e.target.value }))
      }}></input>
      <input type='text' value={this.state.size} onChange={(e) => {
        this.setState(Object.assign({}, this.state, { size: e.target.value }))
      }}></input>
    </div>
  }
}

ReactDOM.render(<Qrgen />, document.getElementById('root'))
