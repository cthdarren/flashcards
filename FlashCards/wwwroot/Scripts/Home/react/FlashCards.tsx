import React, { Component } from 'react'
import ReactDOM from "react-dom";
import Card from './Card'

interface Props {
    
}
interface State {
    cardNames: string[];
    cardId: string[];
}

class FlashCards extends Component<Props, State> {
    state = {
        cardNames:[],
        cardId: []
    }

    render() {
        //do axios request here and get result in json format, plug it into state
        /*
        {
            cards:[
                card1:{
                    cardName:"fdafdasf",
                    cardId: "sadfasdlkfasd"
                },
                card2:{
                    cardName:"fdafdasf",
                    cardId: "sadfasdlkfasd"
                },
                card2:{
                    cardName:"fdafdasf",
                    cardId: "sadfasdlkfasd"
                }
            ]
        }
        */
        return (
            <div>
                <Card title="lma0" desc="lol3" id="kek"/>
                <Card title="lma0" desc="lol3" id="kek"/>
                <Card title="lma0" desc="lol3" id="kek"/>
                <Card title="lma0" desc="lol3" id="kek"/>
            </div>
        )
    }
}

ReactDOM.render(<FlashCards />, document.querySelector("#root"));
