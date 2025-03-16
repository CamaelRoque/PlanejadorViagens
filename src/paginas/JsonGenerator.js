import React, { Component } from 'react';

class JsonGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        // campos do JSON
        name: '',
        age: '',
        email: '',
      },
      jsonResult: null,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: value,
      },
    }));
  };

  generateJSON = () => {
    const { data } = this.state;
    const jsonData = JSON.stringify(data, null, 2);
    this.setState({ jsonResult: jsonData });
  };

  render() {
    const { data, jsonResult } = this.state;

    return (
      <div>
        <h2>JSON Generator</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={data.age}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.generateJSON}>Generate JSON</button>
        {jsonResult && (
          <div>
            <h3>Dados Cadastrais:</h3>
            <pre>{jsonResult}</pre>
          </div>
        )}
      </div>
    );
  }
}

export default JsonGenerator;