import React, {Component} from 'react'
import {Text} from 'react-native'

export class RVText extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {content, style} = this.props
        return (
            <Text {...this.props} style={[{fontSize: 18}, style]}>{content}</Text>
        )
    }
}