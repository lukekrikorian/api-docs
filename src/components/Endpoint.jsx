import React, { Component } from "react";
import Prism from 'prismjs';

class EndpointToggle extends Component {
    render() {
        const endpoint = this.props.endpoint, 
              url = endpoint.url, 
              exampleUrl = endpoint.exampleUrl;
        return (
            <div class="endpoint-toggle" onClick={ this.props.clicked }>
                {
                    ["Open Access", "Open | More with Auth"].includes(endpoint.access) && endpoint.method === "GET" && endpoint.exampleUrl ? 
                    <a class="endpoint-url" href={`https://www.khanacademy.org${exampleUrl}${/\?/.test(exampleUrl) ? '&' : '?'}format=pretty`} target="_blank">{ url }</a> :
                    <h3 class="endpoint-url">{ url }</h3>
                }
                <h5 class={`endpoint-badge ${["POST", "PUT"].includes(endpoint.method) ? "pink" : ""}`}>{ endpoint.method }</h5>
                <h5 class={`endpoint-badge ${endpoint.access === "Open Access" ? "blue" : endpoint.access === "Open | More with Auth" ? "purple" : "orange"}`}>{ endpoint.access }</h5>
            </div>
        );
    }
}

class EndpointBody extends Component {
    render(){
        return (
            <div onClick={this.props.toggleInfo}>
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
                <EndpointToggle clicked={this.toggleInfo.bind(this)} endpoint={this.props.endpoint}/>
                { this.state.clicked && <EndpointBody endpoint={this.props.endpoint}/> }
            </div>
        );
    }
}

export default Endpoint;