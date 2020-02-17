import React from  'react';
import ReactDOM from 'react-dom'

const tasks = ['take out the trash1','take out the trash2','take out the trash3']

const element = React.createElement('ol', null, tasks.map((task, index) => React.createElement('li', {key: index}, task)));


ReactDOM.render(element, document.getElementById('root'));