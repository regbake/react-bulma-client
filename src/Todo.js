import React from 'react';
import './App.sass';

// create a "controlled component"

class Todo extends React.Component {
	onTextChange(e, step) {
		this.props.onTextChange(e.target.value, step);
	}

	onTextSave(step) {
		this.props.onTextSave(step)
	}

	render() {
		return (
			<div className="notification item" style={{marginBottom: '5%'}}>
		    <h1>{this.props.title}</h1>
		    <input value={this.props.description} onChange={e => this.onTextChange(e, this.props.step)} />
		    <br/>
		    <button onClick={e => this.onTextSave(this.props.step)}>Save</button>
		  </div>
		);
	}
}

export default Todo;