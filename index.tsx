import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import classname from 'classnames';
import ChildComponent from './ChildComponent';

interface AppProps {}
interface AppState {
  name: string;
}

let myContainer = classname('A', 'B');

// class App extends Component<AppProps, AppState> {
const ParentComponent: React.FunctionComponent<{}> = () => {
  const [name, setName] = useState<string>('');

  const myCallback = (param: string) => {
    setName(param);
  };

  return (
    <div className={myContainer}>
      <div>Parent: {name}</div>
      <ChildComponent name="Suresh" callback={myCallback} />
    </div>
  );
};

render(<ParentComponent />, document.getElementById('root'));
