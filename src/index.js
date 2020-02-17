import React, {Component} from  'react';
import ReactDOM from 'react-dom'

//const element = React.createElement('ol', null, tasks.map((task, index) => React.createElement('li', {key: index}, task)));

class List extends Component {
    render() { return(<ol>
        {this.props.tasks.map((task, i) => <li key = {i}>{task}</li>)}
        </ol>) }
}

class Title extends Component {
    render() { return(<h1>{this.props.title}</h1>) }

}
class Main extends Component {
    render() {
        return  <div>
                    <Title title='Todo list'/>
                    <List tasks={['First task', 'Second Task']}/>
                    <List tasks={['First task2', 'Second Task2']}/>
                </div>
    }
} 

ReactDOM.render(<Main/>, document.getElementById('root'));