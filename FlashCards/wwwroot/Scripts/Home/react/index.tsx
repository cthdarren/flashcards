


import React, { Component } from 'react'
import ReactDOM from "react-dom";

interface Props {
    
}
interface State {
    
}

class Home extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                POGU
            </div>
        )
    }
}


ReactDOM.render(<Home />, document.querySelector("#root"));

