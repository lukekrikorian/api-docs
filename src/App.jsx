import React, { Component } from "react";
import Docs from "./docs.json";
import DocSection from "./components/DocSection";

class App extends Component {
    render() {
        return (
            <div>
                <h1>KA Internal API Explorer</h1>
                <p style={{ fontWeight: 400 }}>{ Docs.description }</p>
                <ul>{
                    Object.values(Docs.docs).map(i => {
                        return <li><DocSection title={ i.title } description={ i.description } endpoints={ i.endpoints }/></li>;
                    })   
                }</ul>
            </div>
        ); 
    }
}

export default App;