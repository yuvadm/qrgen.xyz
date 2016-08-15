import React from 'react'
import ReactDOM from 'react-dom'
import QRious from 'qrious'

import './base.scss'

class Qrgen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      text: 'Hello World!',
      size: 300
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

  saveImage () {
    this.refs.dl.download = 'qrgen-test.png'
    this.refs.dl.href = this.qr.toDataURL()
  }

  render () {
    return <div id='root'>
      <h1>QR Code Generator</h1>
      <input type='text' value={this.state.text} onChange={(e) => {
        this.setState(Object.assign({}, this.state, { text: e.target.value }))
      }}></input>
      <input type='text' value={this.state.size} onChange={(e) => {
        this.setState(Object.assign({}, this.state, { size: e.target.value }))
      }}></input>
      <a href='' download='qrgen.png' ref='dl' onClick={(e) => { this.saveImage() }}>Save QR Code</a>
      <canvas ref='qr' id='qr'></canvas>
      <footer>
          <p>Created by <a href="https://yuv.al">Yuval Adam</a>. Source available on <a href="https://github.com/yuvadm/qrgen.xyz">Github</a>.</p>
      </footer>
    </div>
  }
}

ReactDOM.render(<Qrgen />, document.getElementById('root'))
