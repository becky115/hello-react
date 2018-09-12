import React, {Component} from 'react';

class LifeCycleSample extends Component {

	state = {
		number: 0,
		color: null
	};

	myRef = null; //ref를 설정한 부분

	constructor(props) {
		super(props);
		console.log('constructor');
	}

	static getDerivedStateFromProps(nextProps, prevState) { //부모에게 받은값 동기화
		console.log('--- getDerivedStateFromProps ---');
		if(nextProps.color !== prevState.color) {
			return {color: nextProps.color};
		}
		return null;
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	/**
	 *
	 * @param nextProps 새로 설정될 props
	 * @param nextState 새로 설정될 state
	 * @returns {boolean}
	 */
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate', nextProps, nextState);
		//숫자의 마지막 자리가 4면 리렌더링하지 않습니다
		return nextState.number % 10 !== 4;
	}

	handleClick = () => {
		this.setState({
			number: this.state.number + 1
		});
	};

	getSnapshotBeforeUpdate(prevProps, prevState) { //- 컴포넌트 변화를  DOM에 반영하기 바로 직전에 호출하는 메서드
		console.log('getSnapshotBeforeUpdate');
		console.log(' prevProps:', prevProps);
		console.log(' prevState:', prevState);
		console.log(' this.props:', this.props);
		console.log(' this.state:', this.state);

		if(prevProps.color !== this.props.color) {//이전 부모 컴포넌트값이 현재 부모 컴포넌트값과 일치 x
			console.log(this.props.color+",." + this.myRef.style.color, this.myRef)
			return this.myRef.style.color;//이전 color값 넘김
		}
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate', prevProps, prevState);
		if(snapshot) {//getSnapshotBeforeUpdate 반환값
			console.log('업데이트 되기 직전 색상:', snapshot);
		}
	}

	render() {
		console.log('render');
		const style = {
			color: this.props.color
		};

		return (
			<div>
				<h1 style={style} ref={ref => this.myRef = ref}>
					{this.state.number}
				</h1>
				<p>color: {this.state.color}</p>
				<button onClick={this.handleClick}>
					더하기
				</button>
			</div>
		);
	}
}

export default LifeCycleSample;
