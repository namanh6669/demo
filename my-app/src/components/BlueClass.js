import React from 'react';
class BlueClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorState: 'yellow'
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps.colorText)
  }
  change() {
    this.setState({
      colorState: 'black'
    })
  }
  render() {
    console.log('render', this.props.colorText)
    return <div onClick={() => this.change()}>
      {this.props.colorText}
    </div>
  }

}

export default BlueClass; 