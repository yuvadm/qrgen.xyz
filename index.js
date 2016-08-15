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
    this.refs.qrimg.src = this.qr.toDataURL()
  }


  componentDidUpdate (prevProps, prevState) {
    this.qr.value = this.state.text
    this.qr.size = this.state.size
    this.refs.qrimg.src = this.qr.toDataURL()
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
      <p className='save'>To save the QR code, right-click the image and 'Save Image As', or touch and hold the image on your mobile browser.</p>
      <canvas ref='qr' id='qr'></canvas>
      <img ref='qrimg' id='qrimg'></img>
      <footer>
          <p>Created by <a href="https://yuv.al">Yuval Adam</a>. Source available on <a href="https://github.com/yuvadm/qrgen.xyz">Github</a>.</p>
      </footer>
    </div>
  }
}

ReactDOM.render(<Qrgen />, document.getElementById('root'))
