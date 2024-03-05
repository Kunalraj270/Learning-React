import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
           userInfo : {
            name : "dummy",
            location : "Gaya"
           }
        }  
        console.log("Child Constructor")
    }
   async componentDidMount(){
        console.log("Child Component Did Mount");
        //api call
        const data = await fetch("https://api.github.com/users/kunalraj270");
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo : json
        })
        
    }
    render() {
        console.log("Child Render")
        const {name , location , login , avatar_url} = this.state.userInfo;
        return (
            <div className="userClass-card">
                <img style={{width:"100px" , height:"100px" , borderRadius:"50%"}} src={avatar_url}/>
                <h1>Name : {name}</h1>
                <h2>Location :{location} </h2>
                <h3>User-Id : {login}</h3>
            </div>
        )
    }
}
export default UserClass;