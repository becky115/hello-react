import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			number: 0
		}
	}

	render() {
		return (
			<div>
				<div>new component {this.props.name} {this.props.test} {this.props.required}</div>
				<div>숫자 {this.state.number}</div>
				<button onClick={() => {
					this.setState({
						number: this.state.number + 1
					})
				}}>더하기</button>
			</div>
		)
	}
}

MyComponent.defaultProps = {
	name: 'gg'
};

MyComponent.propTypes  = {
	test: PropTypes.string,
	required: PropTypes.number.isRequired
};

export default MyComponent;
