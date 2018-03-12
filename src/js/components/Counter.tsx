import * as React from "react";

import { connect } from "react-redux";
import { change } from "../actions/counterActions"

interface componentProps {
    index:number,
    color:any,
    change:any
}

interface componentState {
    hex:string
}

class Counter extends React.Component<componentProps, componentState> {
    public render() {
        return (
            <div className="counter">
                <span className="counter__count">{this.props.color[this.props.index]}</span>
                <button className="counter__btn" onClick={() => this.add(1)}>Up</button>
                <button className="counter__btn" onClick={() => this.add(-1)}>Down</button>
            </div>
        )
    }

    constructor(props: componentProps){
        super(props);

        this.state = {
            hex:"00"
        }
        
        this.add = this.add.bind(this);
        
    }

    add(mode:number):void {
        let hex1:string = this.props.color[this.props.index];
        let hex2:string = "1";
        let hex: string;

        if ( (parseInt(hex1, 16) >= parseInt("ff", 16) && mode == 1) || ( parseInt(hex1, 16) <= 0 ) && mode == -1) {
            return;
        }
        
        hex = (parseInt(hex1, 16) + parseInt(hex2, 16)*mode).toString(16);

        if ( parseInt(hex, 16) < parseInt("10", 16) ) {
            hex = "0" + hex;
        }

        let newColor = this.props.color;
        newColor[this.props.index] = hex;

        
        this.props.change(newColor);
        this.setState({ hex });
    }

    componentDidMount() {
        this.setState({hex:this.props.color[this.props.index]});
    }

    componentWillReceiveProps() {
        this.setState({hex:this.props.color[this.props.index]});
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Counter);