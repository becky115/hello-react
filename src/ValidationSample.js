import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
	state = {
		password: '',
		clicked: false,
		validated: false,
	};

	handleState = (e) => {
		console.log(this.state.clicked)
		this.setState({
			password: e.target.value
		});
	};

	handleButtonClick = (e) => {
		this.setState({
			clicked: true,
			validated: this.state.password === '0000'
		});
		console.log(this.input);
		this.input.focus();
	};

	render() {
		return (
			<div>
				<input
					type="password"
					value={this.state.password}
					onChange={this.handleState}
					className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
					ref={(ref) => {this.input = ref}}
				/>
				<button onClick={this.handleButtonClick}>검증하기</button>
			</div>
		);
	}
}


export default ValidationSample;
