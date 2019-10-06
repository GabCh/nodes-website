import React from 'react'
import {FacebookFeed} from './FacebookFeed'

export class FollowUs extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render = (): JSX.Element => (
        <FacebookFeed/>
    )
}
