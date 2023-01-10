import { Component } from 'react';
import axios from 'axios';
import { Card, Header, Form, Input, Icon } from 'semantic-ui-react';

let endpoint = 'http://localhost:3008';

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

	onChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value,
		})
	}

	onSubmit

	getTask = () => {
		axios.get(endpoint + "/api/task").then((res)=> {
			if (res.data){
				this.setState({
					items: res.data.map((item) => {
						let color = "teal";
						let style = {
							wordWrap: "break-word",
						}

						if(item.status){
							color = "green";
							style["textDecorationLine"] = "line-through"
						}

						return(
							<Card key={item_id} color={color} fluid className="rough">
								<Card.Content>
									<Card.Header textAlign="left">
										<div style={style}>{item.task}</div>
									</Card.Header>
									<Card.Meta textAlign="right">
										<Icon
										name="check circle"
										color="blue"
										onClick={() => this.updateTask(item._id)}
										/>
										<span style={{paddingRight: 10}}>Undo</span>
										<Icon
										name="delete"
										color="red"
										onClick={() => this.deleteTask(item._id)}
										/>
									</Card.Meta>
								</Card.Content>
							</Card>
						)
					})
				})
			}
		})
	}

	updateTask

	undoTask

	deleteTask

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
						{/* <Button>Create Task</Button> */}
                    </Form>
				</div>
				<div>
					<Card.Group>{this.state.items}</Card.Group>
				</div>
			</div>
		);
	}
}

export default TodoList;
