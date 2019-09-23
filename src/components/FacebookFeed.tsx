import React from 'react'

export interface FacebookFeedState {
    width: number
    height: number
}

export class FacebookFeed extends React.Component<any, FacebookFeedState> {

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
        this.setState(() => ({ width: window.innerWidth, height: window.innerHeight }))
    }

    render = (): JSX.Element => {
        let dataHeight: string = ''
        if (this.state.width > 1500) dataHeight = '800'
        return (
          <div className='fb-page' data-href='https://www.facebook.com/nodesMusique/' data-tabs='timeline'
               data-width='' data-height={dataHeight} data-small-header='true' data-adapt-container-width='true'
               data-hide-cover='true' data-show-facepile='true'>
              <blockquote cite='https://www.facebook.com/nodesMusique/' className='fb-xfbml-parse-ignore'><a
                href='https://www.facebook.com/nodesMusique/'>Nodes</a></blockquote>
          </div>
        )

    }
}
