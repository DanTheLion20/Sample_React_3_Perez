import React, {Component} from "react";


class ClassState extends Component {
    //constructor initialize an object's state in class
    constructor(){
        super()
        this.state = {
            sampleContent: "Hello World",
            bgcol: "red"
        };

        //Binding Method
        this.changeElement = this.changeElement.bind(this);

    }
    changeElement = () => {
        //diff method
        //this.setState({sampleContent: "Wow Nabago", bgcol: "yellow"});
        //this.setState({bgcol: "yellow"});
        // eslint-disable-next-line eqeqeq
        this.state.bgcol == "red" ? this.setState({sampleContent: "Wow Nabago", bgcol: "yellow"}) : this.setState({bgcol: "red"});
    }
    render() {

        //for Destructuring State to remove {this.state}
        //before this.state.bgcol after bgcol
        //before this.state.sampleContent after sampleContent
        const {bgcol, sampleContent} = this.state;
        return (
            <>
            <h1 id="sampleElement" style={{background: bgcol}}>{sampleContent}</h1>
            <button onClick={this.changeElement}>Change Sample Element</button>
            </>
        );
    }
}

export default ClassState;