import React, { Component, Fragment } from 'react';
import './App.css';
import MyComponent from './MyComponent';


class App extends Component {
  render() {
  	const text = 'eunji';
  	const condition = true;
  	const style = {
  	    backgroundColor: 'gray',
	    border: '1px solid black',
	    height: Math.round(Math.random() * 300) + 50,
	    width: Math.round(Math.random() * 300) + 50,
	    WebkitTransition: 'all',
	    MozTransition: 'all',
	    msTransition: 'all'
    };
    return (
        <Fragment>
            <h1>하이</h1>
            <h1>하이</h1>
	        <h2>{text}gg</h2>
	        {
	        	condition ? '참':'거짓'
	        }
	        <div style={style}></div>
	        <div className="my-div">
		        <h1>react hi</h1>
	        </div>
	        <MyComponent name='big' required={3}/>
	        <MyComponent required={2}/>
	        <MyComponent test='ee' required={1}/>
	        <MyComponent test='{33}' required={3}/>
	        <MyComponent test='{true}' required={4}/>
        </Fragment>
    );
  }
}

export default App;
