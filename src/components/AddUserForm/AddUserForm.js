import { Component } from 'react';

class AddUserForm extends Component {
  state = {
    name: '',
    email: '',
  };

  handleCange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addUser({ ...this.state });
    // this.reset();
    this.props.closeForm();
  };

  //   reset = () => {
  //     this.setState({ name: '', email: '' });
  //   };

  render() {
    const { name, email } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleCange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleCange}
          />
        </label>

        <button type="submit">Save</button>
      </form>
    );
  }
}

export default AddUserForm;
