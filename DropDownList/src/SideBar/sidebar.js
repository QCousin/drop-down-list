import React,{Component} from "react"
import Selec from "./selec"
import list from "./data"

export default class SideBar extends Component{
    constructor(){
        super()
        this.state = {
            list:list
        }
    }

    render(){
        return <div className="sidebar">
            <Selec list={this.state.list} />
        </div>
    }
}