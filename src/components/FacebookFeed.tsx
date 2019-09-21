import React from 'react'

export class FacebookFeed extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = { width: 0, height: 0 }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight })
    }

    render = (): JSX.Element => {
        if (this.state.width > 1500) {
            return (
                <div className='fb-page' data-href='https://www.facebook.com/nodesMusique/' data-tabs='timeline'
                     data-width='' data-height='800' data-small-header='true' data-adapt-container-width='true'
                     data-hide-cover='true' data-show-facepile='true'>
                    <blockquote cite='https://www.facebook.com/nodesMusique/' className='fb-xfbml-parse-ignore'><a
                        href='https://www.facebook.com/nodesMusique/'>Nodes</a></blockquote>
                </div>
            )
        } else {
            return (
                <div className='fb-page' data-href='https://www.facebook.com/nodesMusique/' data-tabs='timeline'
                     data-width='' data-height='' data-small-header='true' data-adapt-container-width='true'
                     data-hide-cover='true' data-show-facepile='true'>
                    <blockquote cite='https://www.facebook.com/nodesMusique/' className='fb-xfbml-parse-ignore'><a
                        href='https://www.facebook.com/nodesMusique/'>Nodes</a></blockquote>
                </div>
            )
        }

    }
}
