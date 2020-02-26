import React from 'react'

class Cell extends React.Component {

    constructor(props){
        super(props)
        this.state = {color: 'black'}
    }

    componentDidMount() { 
        this._ismounted = true;
    }

    componentDidUpdate(prevProps, prevState) {
        if(this._ismounted && prevProps.changed !== this.props.changed){
            if(this.props.changed === true){
                this.setState({color: 'red'})
                this.returnToNormal()
            } else if(this.props.changed === false){
                this.setState({color: 'green'})
                this.returnToNormal()
            }
        }
    }

    returnToNormal = () => {
        setInterval(() => {
            this.setState({color: 'black'})
        }, 300000)
    }

    render() {
        return(
            <div className={`cell ${this.state.color}`}>
                {this.props.value}
            </div>
        )
    }
}

export default Cell