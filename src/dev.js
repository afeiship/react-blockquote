import './dev.scss';
import ReactBlockquote from './main';

/*===example start===*/

// install: npm install afeiship/react-blockquote --save
// import : import ReactBlockquote from 'react-blockquote'

class App extends React.Component {
  state = {

  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render() {
    return (
      <div className="hello-react-blockquote">
        <ReactBlockquote style={{padding: 21}}>
          Whenever you see a successful business, someone once made a courageous decision. Peter F. Drucker
        </ReactBlockquote>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
