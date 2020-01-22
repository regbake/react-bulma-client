import React from 'react';

import Header from './Header';
import Todo from './Todo';
import Footer from './Footer';

import './App.sass';

/*
let list = [
  {
    'id': 1,
    'title': '1st Item',
    'description': 'Description here.'
  },

  {
    'id': 2,
    'title': '2nd Item',
    'description': 'Another description here.'
  },

  {
    'id': 3,
    'title': '3rd Item',
    'description': 'Third description here.'
  },

  {
    'id': 4,
    'title': '4th Item',
    'description': 'Description here.'
  },

  {
    'id': 5,
    'title': '5th Item',
    'description': 'Another description here.'
  },

  {
    'id': 6,
    'title': '6th Item',
    'description': 'Third description here.'
  },
];
*/

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //todos: [],
      list: [],
    }
  }

  async componentDidMount() {
    console.log('inside componentDidMount');

    try {
      const res = await fetch('http://127.0.0.1:8000/api');
      const list = await res.json();

      this.setState({
        list
      });
    } catch (e) {
      console.log(e)
    }
  }

  handleTextChange = (text, step) => {
    let _list = this.state.list;
    _list[step].description = text;

    this.setState({_list})
  }

  handleTextSave = () => {
    // just send the data for the step

    // check if the text is different than previously?

    // else, then send
    alert('yay save');
  }

  render() {
    return (
      <div>
        <Header title={'Howdy'} subtitle={'Subtitle'}/>

        <div className="container is-fluid" style={{marginTop: '7%'}}>
          {this.state.list.map((item, step) => (
            <Todo title={item.title}
              description={item.description}
              onTextChange={this.handleTextChange}
              onTextSave={this.handleTextSave}
              step={step}
              key={item.id}
            />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
