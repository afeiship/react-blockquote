# react-blockquote
> Block with quote for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-blockquote --registry=https://registry.npm.taobao.org
```

```js
import ReactBlockquote from 'react-blockquote';
```

```scss
// customize your styles:
$react-blockquote-options:(
  color: #ccc,
  font-size: 50px,
  opacity: 0.3,
  font-family:'Georgia'
)!default;

@import 'node_modules/react-blockquote/dist/style.scss';
```


## usage:
```jsx

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

```
