import * as React from "react";
import  Counter  from "./Counter";

import { connect } from "react-redux";
import { change } from "../actions/counterActions"

interface componentProps {

}

interface componentState {
    color:string,
    textColor:string
}

class CounterMain extends React.Component<any, componentState> {
    public render() {
        return (
            <div>
                <h1 className="main-heading">Simple...ish counter</h1>


                <div className="to-show" style={{background : "#" + this.props.color[0] + this.props.color[1] + this.props.color[2] }}>
                    <span style={{color :"#" + this.makeTextColor() }}>{ "#" + this.props.color[0] + this.props.color[1] + this.props.color[2]}</span>
                </div>

                <button className="btn" onClick={ this.generateRandom }>Randomise</button>
                <div className="counters">
                    <Counter index={0}></Counter>
                    <Counter index={1}></Counter>
                    <Counter index={2}></Counter>
                </div>
 
            </div>
        )
    }

    constructor(props: componentProps){
        super(props);

        this.state = {
            color:"#000",
            textColor:"#fff"
        }

        this.generateRandom = this.generateRandom.bind(this);
    }

    generateRandom():void {
        let color =[];

        for( let i = 0; i < 3; i++) {
            color[i] = (Math.random()*0xFF<<0).toString(16);
            if ( parseInt(color[i], 16) < parseInt("10", 16) ) {
                color[i] = "0" + color[i];
            }
        }

        this.props.change(color);        
    }

    makeTextColor():string {
        let bgColor = this.props.color[0] + this.props.color[1] + this.props.color[2];
        let textColor = (parseInt("ffffff", 16) - parseInt( bgColor, 16)).toString(16);

        // this.setState({textColor});
        return textColor;
    }

    componentWillMount() {

        this.generateRandom();   
        this.makeTextColor();

    }

    componentWillReceiveProps() {
        
        this.makeTextColor();

    }
}

const mapStateToProps = (state:any) => {    
    return {
        color: state.counter.color,
    }
  }
  
const mapDispatchToProps = (dispatch:any) => {
    return {
        change: (color:Array<string>) => {            
            dispatch(change(color))
        }, 
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CounterMain);