import React,{Component} from "react"
import ListChild from "./listChild"

export default class SideBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            obj:{}
        }
    }

    //组件内默认props数据
    static defaultProps = {
        list:[
            {
                title:"标题一",
                isOpen:false,
                main:["1-1","1-2","1-3"]
            }
        ],
    }

    render(){
        let {list} = this.props
        let {obj} = this.state
        return <div>
            {
                list.map((item,index) => {
                    return <div key={index}>
                        <h3 onClick={this.OpenClick.bind(this,item)}>{item.title}</h3>
                        {item.isOpen ? <ListChild list={item} /> : null}
                    </div>
                })
            }
        </div>
    }
    OpenClick(item) {
        item.isOpen = !item.isOpen
        this.setState({
            obj:item
        })
    }
}