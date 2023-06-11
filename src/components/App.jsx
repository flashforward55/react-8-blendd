import { Component } from 'react';
import { data } from 'data/users';
import { Button } from './Button/Button';
import { List } from './List/List';

class App extends Component {
  state = {
    users: data,
    isListShown: false,
  };

  showList = () => {
    this.setState({ isListShown: true });
  };

  deleteUser = id => {
    this.setState(prevState => ({
      users: prevState.users.filter(element => element.id !== id),
    }));
  };
  render() {
    const { isListShown, users } = this.state;
    return (
      <>
        {isListShown ? (
          <List data={users} deleteUser={this.deleteUser} />
        ) : (
          <Button text="Show list of users " clickHandler={this.showList} />
        )}
      </>
    );
  }
}

export default App;
