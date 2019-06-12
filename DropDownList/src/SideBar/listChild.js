import React,{Component} from "react"

export default class listChild extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {list} = this.props
        return <ul>
            {
                list.main.map((item,index) => <li key={index}>{item}</li>)
            }
        </ul>
    }
}