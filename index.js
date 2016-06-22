import React from 'react'
import ReactDOM from 'react-dom'

class Qrgen extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            'text': 'abcde'
        }
    }

    render () {
        return <div id='root'>
            <h1>qrgen</h1>
            <input type='text' value={this.state.text} onChange={(e) => {
                this.setState({ text: e.target.value })
            }}></input>
            <p>{this.state.text}</p>
        </div>
    }
}

ReactDOM.render(<Qrgen />, document.getElementById('root'))
