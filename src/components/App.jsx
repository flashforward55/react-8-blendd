import { Component } from 'react';
import { nanoid } from 'nanoid'
import { data } from 'data/users';
import { Button } from './Button/Button';
import { List } from './List/List';
import AddUserForm from './AddUserForm/AddUserForm';


class App extends Component {
  state = {
    users: data,
    isListShown: false,
    isFormShown: false,
  };

  showList = () => {
    this.setState({ isListShown: true });
  };

  deleteUser = id => {
    this.setState(prevState => ({
      users: prevState.users.filter(element => element.id !== id),
    }));
  };

  addUser = (data) => {
    const newUser = {
      id: nanoid(),
      ...data,
    } 

    this.setState(prevState => ({users: [...prevState.users, newUser] }))
  }

  openForm = () => {
    this.setState({ isFormShown: true });
  }

  closeForm = () => {
      this.setState({ isFormShown: false });
  }
  
  render() {
    const { isListShown, users, isFormShown } = this.state;
    return (
      <>
        {isListShown ? (
          <>
          <List data={users} deleteUser={this.deleteUser} />
            <Button text="Add User" clickHandler={this.openForm}/>
          </>
            
        ) : (
          <Button text="Show list of users " clickHandler={this.showList} />
        )}

        {isFormShown &&
          <AddUserForm addUser={this.addUser} closeForm={this.closeForm} />}
      </>

    
    );
  }
}

export default App;
