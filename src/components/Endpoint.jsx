import React, { Component } from "react";

class EndpointToggle extends Component {
    render() {
        return (
            <div class="endpoint-toggle" onClick={ this.props.clicked }>
                <h3 class="endpoint-url">{ this.props.endpoint.url }</h3>
                <h5 class={`endpoint-badge ${["POST", "PUT"].includes(this.props.endpoint.method) ? "purple" : ""}`}>{ this.props.endpoint.method }</h5>
                <h5 class={`endpoint-badge ${this.props.endpoint.access === "Open Access" ? "blue" : "orange"}`}>{ this.props.endpoint.access }</h5>
            </div>
        );
    }
}

class EndpointBody extends Component {
    render(){
        return (
            <div onClick={ this.props.toggleInfo }>
                <h4 class="endpoint-header">{ this.props.endpoint.header }</h4>
                <p class="endpoint-description">{ this.props.endpoint.description }</p>
                <pre class="endpoint-code">{ JSON.stringify(this.props.endpoint.code, null, 2) }</pre>
            </div>
        );
    }
}

class Endpoint extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        };
        this.toggleInfo = this.toggleInfo.bind(this);
    }
    toggleInfo(){
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
    }
    render(){
        return (
            <div class="endpoint">
                <EndpointToggle clicked={ this.toggleInfo.bind(this) } endpoint={ this.props.endpoint }/>
                { this.state.clicked && <EndpointBody endpoint={ this.props.endpoint }/> }
            </div>
        );
    }
}

export default Endpoint;