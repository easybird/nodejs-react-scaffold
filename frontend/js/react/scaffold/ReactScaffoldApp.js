import React from 'react';
import ScaffoldView from './ScaffoldView';
import ScaffoldEditor from './ScaffoldEditor';
class ReactScaffoldApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentName: this.props.example.name
    };

    this.getChildContext = () => ({
      currentUrl: props.currentUrl,
      multilan: props.multilan
    });

    this.changeName = (newName) => this._changeName(newName);
  }

  componentDidMount() {
    alert('React app loaded!');
  }

  _changeName(newName) {
    this.setState({
      currentName: newName
    });
  }

  render() {
    const { currentName } = this.state;
    const { message } = this.props.example;
    return (
      <div>
        <ScaffoldView
          name={currentName}
          message={message}
        />
        <ScaffoldEditor
          name={currentName}
          onChangeName={this.changeName}
        />
      </div>
    );
  }
}

ReactScaffoldApp.propTypes = {
  example: React.PropTypes.object.isRequired,
  currentUrl: React.PropTypes.string.isRequired,
  multilan: React.PropTypes.object.isRequired
};

ReactScaffoldApp.childContextTypes = {
  currentUrl: React.PropTypes.string.isRequired,
  multilan: React.PropTypes.object.isRequired
};
export default ReactScaffoldApp;
