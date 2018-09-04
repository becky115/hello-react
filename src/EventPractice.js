import React, {Component} from 'react';

class EventPractice extends Component {

	state = {
		username: '',
		message:  ''
	};


	constructor(props) {
		super(props);
		console.log(this);
		// this.state = {
		// 	message: ''
		// };
		this.handleChangeTemp = this.handleChangeTemp.bind(this);
		this.handleClickTemp = this.handleClickTemp.bind(this);
	}



	handleChangeTemp(e) {
		this.setState({
			message: e.target.value
		})
	}

	handleClickTemp() {
		alert(this.state.message);
		this.setState({
			message: ''
		})
	}

	handleChange = (e) => {
		console.log(e.target.name, e.target.value);
		console.log(e.target);
		this.setState({
			//message: e.target.value
			[e.target.name]: e.target.value
		})
	};

	handleClick = () => {
		alert(this.state.username+","+ this.state.message);
		this.setState({
			username: '',
			message: ''
		})
	};

	handleKeyPress = (e) => {
		console.log(e.key);
		if(e.key === 'Enter') {
			this.handleClick();
		}
	};


	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<div>{this.props.name}</div>
				<div>
					ex) 4.2.4
					<input
						type="text"
						name="username"
						placeholder="유저명"
						value={this.state.username}
						onChange={this.handleChange}
					/>
					ex) 4.2.3.1
					<input
						type="text"
						name="message"
						placeholder="아무거나 입력해 보세요"
						value={this.state.message}
						onChange={this.handleChange}
						onKeyPress={this.handleKeyPress}
					/>
					<button onClick={this.handleClick}>확인(함수)</button>
				</div>
				<input
					type="text"
					name="message"
					placeholder="아무거나 입력해 보세요"
					value={this.state.message}
					onChange={
						(e) => {
							//console.log(this);
							//console.log(e);
							//console.log(e.target.value);
							this.setState({
								message: e.target.value
							})

						}
					}
				/>
				<button onClick={
					() => {
						alert(this.state.message)
						this.setState({
							message: ''
						});
					}
				}>확인</button>
			</div>
		);
	}
}


export default EventPractice;
