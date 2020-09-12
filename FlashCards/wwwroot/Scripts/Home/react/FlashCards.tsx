import React, { Component } from 'react'

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
        return (
            <div>
                
            </div>
        )
    }
}

export default FlashCards
