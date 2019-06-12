import React,{Component} from "react"

export default class This extends Component{
    constructor(){
        super()
        this.thisClick = this.thisClick.bind(this)
    }
    render(){
        return <div>
            <h1 onClick={this.thisClick}>打印this</h1>
        </div>
    }
    thisClick () {
        console.log(this)
    }
}