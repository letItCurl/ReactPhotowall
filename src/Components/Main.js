import React, {Component} from  'react';
import List from './List'
import Title from './Title'
class Main extends Component {
    render() {
        return  <div>
                    <Title title='Todo list'/>
                    <List tasks={['First task', 'Second Task']}/>
                    <List tasks={['First task2', 'Second Task2']}/>
                </div>
    }
} 
export default Main