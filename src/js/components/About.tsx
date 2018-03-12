import * as React from "react";

export default class TestList extends React.Component<any, any> {
    public render() {


        return (
            <div>

                <h1 className="main-heading">About</h1>

                <p className="a-paragraph">
                    This page exist just because I needed to test the routing too.
                </p>

            </div>
        )
    }

    constructor(props: any){
        super(props);

        this.handleRemove = this.handleRemove.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleRemove(item:string) {
        this.props.deleteTest(item);
    }

    handleAdd(item:string) {
        this.props.addTest(item);
    }
}

