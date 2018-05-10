import React, { Component } from "react";
import Endpoint from "./Endpoint";
import "../css/Endpoint.css";

class DocSection extends Component {
    render(){
        return (
            <div>
                <h3 class="endpoint-header-title">{ this.props.title }</h3>
                <p class="endpoint-header-description" dangerouslySetInnerHTML={{ __html: this.props.description.replace(/`([^`]+)`/g, '<span>$1</span>') }}></p>
                <div class="endpoints">
                    <ul>{
                        this.props.endpoints.map(i => {
                            return <li><Endpoint endpoint={i}/></li>;
                        })
                    }</ul>
                </div>
            </div>
        );
    }
}

export default DocSection;