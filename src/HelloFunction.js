import React from 'react';
//import React, {Component} from 'react';

//함수형 컴포넌트
function Hello(props) {
	return (
		<div>Hello {props.name}</div>
	)
}

/*
const Hello = ({name}) => {
	return (
		<div>Hello {name}</div>
	)
};

const Hello = ({name}) => (
	<div>Hello {name}</div>
);


//class문법
class Hello extends React.Component {
	render() {
		return (
			<div>Hello {this.props.name}</div>
		);
	}
}

*/

export default Hello;

