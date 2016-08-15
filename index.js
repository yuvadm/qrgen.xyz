import React from 'react'
import ReactDOM from 'react-dom'
import QRious from 'qrious'

class Qrgen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      'text': 'abcde'
    }
  }

  updateQr () {
    const qr = new QRious({
      element: document.getElementById('qr'),
      value: this.state.text
    })
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.text != prevState.text) {
      this.updateQr()
    }
  }

  render () {
    return <div id='root'>
      <h1>qrgen</h1>
      <canvas id='qr'></canvas>
      <input type='text' value={this.state.text} onChange={(e) => {
        this.setState({ text: e.target.value })
      }}></input>
      <p>{this.state.text}</p>
    </div>
  }
}

ReactDOM.render(<Qrgen />, document.getElementById('root'))
