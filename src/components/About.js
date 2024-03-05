import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }
    componentDidMount(){
        //api call
        console.log("Parent Did Mount ")
    }
    render() {
        console.log("Parent Render")
        return (
            <div>
                <UserClass name={"Amdoc using class"} location={"Delhi"} />
            </div>
        )
    }
}
export default About;

/*
- Parent constructor
  - parent render
   - Amdoc child constructor
   - Amdoc child render
   - Birlachild constructor
   - Birlachild render
-Amdoc did mount
-Birlasoft did mount
-Parent Constructor




*/