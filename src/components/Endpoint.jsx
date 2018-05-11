import React, { Component } from "react";
import Prism from 'prismjs';

class EndpointToggle extends Component {
    render() {
        const endpoint = this.props.endpoint;
        return (
            <div class="endpoint-toggle" onClick={ this.props.clicked }>
                {
                    endpoint.access === "Open Access" && endpoint.method === "GET" && endpoint.exampleUrl ? 
                    <a class="endpoint-url" href={`https://www.khanacademy.org${endpoint.exampleUrl}`} target="_blank">{ endpoint.url }</a> :
                    <h3 class="endpoint-url">{ endpoint.url }</h3>
                }
                <h5 class={`endpoint-badge ${["POST", "PUT"].includes(endpoint.method) ? "purple" : ""}`}>{ endpoint.method }</h5>
                <h5 class={`endpoint-badge ${endpoint.access === "Open Access" ? "blue" : "orange"}`}>{ endpoint.access }</h5>
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
                <pre class="endpoint-code"><code dangerouslySetInnerHTML={{ __html: Prism.highlight(JSON.stringify(this.props.endpoint.code, null, 2), Prism.languages.javascript, 'javascript') }}></code></pre>
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