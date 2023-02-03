import { Component } from "react";

export class Header extends Component{
    constructor(props){
        // this.props = props;
        super(props);
    }
    render() {
        return <div>
            <header className="App-header">
                Long time no see, React!
                </header>
        </div>
    }
}