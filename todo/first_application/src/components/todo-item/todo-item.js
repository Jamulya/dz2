import React from 'react'

class ToDoItem extends React.Component {
  state = {
    important: this.props.important
  }

  clickMe = () => {
    this.setState((state) =>{
      return {important: !state.important}
    })
  }
  render() {
    const style = {
      color: this.state.important ? 'blue' : 'black' 
    }

    const label = this.props.label;
    const id = this.props.id;

    return (
    <p 
      style={style}
      onClick={() => {this.props.mayaFunksiya(id)
      }}
    >
      {label}
      </p>
    );
  }
}

export default ToDoItem

