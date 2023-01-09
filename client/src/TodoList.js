import { Component } from 'react';
import axios from 'axios';
import { Card, Header, Form, Input, Icon } from 'semantic-ui-react';

let endpoint = 'http://localhost:8000';

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			task: '',
			items: [],
		};
	}
	componentDidMount() {
		this.getTask();
	}

	render() {
		return (
			<div>
				<div className='row'>
					<Header className='header' color='indigo'>
						To Do List
					</Header>
                    <Form onSubmit={this.onSubmit}>
                        <input 
                            type='text'
                            name='task'
                            onChange={this.onChange}
                            value={this.state.task}
                            fluid
                            placeholder='Create a Task'
                        />
                    </Form>
				</div>
			</div>
		);
	}
}

export default TodoList;
