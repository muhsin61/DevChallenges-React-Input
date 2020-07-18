import React, { Component } from 'react'
import './Forms.css';

export default class Input extends Component {
    state={
        clasName:"",
        labelName:"",  
        spanStart:"",
        spanEnd:"",
        label:"label",
        disabled: false
    }
    componentDidMount(){
        let still = ""
        let labelStill = "label1 "
        let spanStart ="material-icons Icon startIcon "
        let spanEnd ="material-icons Icon endIcon "
        if(this.props.error){
            still += "error "
            labelStill += "err "
        }
        if(this.props.size){
            still += this.props.size + " "
            if(this.props.size === "md"){
                spanStart += "mid "
                spanEnd += "midEnd "
            }
            if(this.props.size === "sm"){
                spanStart += "smal "
                spanEnd += "smalEnd "
            }
        }
        if(this.props.fullWidth){
            still += "fullWidth "
            spanStart += "fulStart "
            spanEnd += "fulEnd "
        }
        if(this.props.startIcon){
            still += "push "
        }
        if(this.props.endIcon){
            still += "pull "
        }
        if(this.props.disabled){
            still += "disabled "
            this.setState({disabled:true})
        }
        if(this.props.label){
            this.setState({
                label:this.props.label
            })
        }
        this.setState({
                clasName: still,
                labelName : labelStill,
                spanEnd: spanEnd,
                spanStart: spanStart
            })
    }
    render() {
        if(this.props.multiline){
            return (
                <div>
                    <p className={this.state.labelName}>{this.state.label}</p>
                    <textarea cols="40" rows={this.props.row} type="text" value={this.props.value} className={this.state.clasName} placeholder="Placeholder" disabled={this.state.disabled}/>
                    <p className="label2">{this.props.helperText}</p><span className={this.state.spanEnd}>{this.props.endIcon}</span><span className={this.state.spanStart}>{this.props.startIcon}</span>
                </div>
            )
        }
        else{
            return (
                <div>
                    <p className={this.state.labelName}>{this.state.label}</p>
                    <input type="text" value={this.props.value} className={this.state.clasName} placeholder="Placeholder" disabled={this.state.disabled}/>
                    <p className="label2">{this.props.helperText}</p><span className={this.state.spanEnd}>{this.props.endIcon}</span><span className={this.state.spanStart}>{this.props.startIcon}</span>
                </div>
            )
        }
        
    }
}
