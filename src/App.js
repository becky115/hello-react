import React, {Component} from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class APP extends Component {
	render() {
		return (
			<div>
				<ValidationSample/>
				<ScrollBox ref={(ref) => {this.scrollBox = ref}}/>
				<button onClick={() =>
				{
					console.log(this.scrollBox);
					console.log(this.scrollBox.scrollToBottom);
					this.scrollBox.scrollToBottom();
				}}>맨 밑으로</button>
			</div>
		);
	}
}


export default APP;
