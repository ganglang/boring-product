import React,{Component} from 'react';
import './tab.scss';
class Tab extends Component{
    constructor(props){
        super(props);
        this.state={
            html:'',
            height:0,
            baseHeight:0,
            lineArray:["1"]
        }
    }

    componentDidMount(){
        let pre=document.getElementById("pre");
        this.setState({
            baseHeight:pre.offsetHeight,
            height:pre.offsetHeight
        })
    }
    
    enterCode=(event)=>{
        let pre=document.getElementById("pre");
        //pre.innerHTML=event.target.value;
        this.setState({
            html:event.target.value,
            height:pre.offsetHeight
        })
        //console.log(pre.offsetHeight);
        let num=pre.offsetHeight/this.state.baseHeight;
        let arr=[];
        for(let i=1;i<=num;i++){
            arr.push(i+'');
        }
        this.setState({
            lineArray:arr
        })  
    }

    keyPress=(event)=>{
        if(event.keyCode=='13'){
            var height=this.state.height+this.state.baseHeight;
            this.setState({
                height:height
            })
            let num=this.state.height/this.state.baseHeight+1;
            let arr=[];
            for(let i=1;i<=num;i++){
                arr.push(i+'');
            }
            this.setState({
                lineArray:arr
            });
        }
    }

    render(){
        return (
            <div className="tab-page">
                <div className="code-box">
                    <div className="line-box" style={{height:this.state.height+"px"}}>
                        {this.state.lineArray.map(item=>{
                            return (<span className="line" key={item}>{item}</span>)
                        })}  
                    </div>
                    <div className="enter-box">
                        <pre id="pre">{this.state.html}</pre>
                        <textarea style={{height:this.state.height+"px"}}
                        /*onKeyUp={this.keyPress.bind(this)}*/
                        onChange={this.enterCode.bind(this)}></textarea>
                    </div>
                    
                </div>
                
                
            </div>
        )
    }
}

export default Tab;