import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foo: 1
        }
    }
    render() {
        return(
            <td>
                <input type="checkbox" />
            </td>
        )
    }
}

export default Checkbox;