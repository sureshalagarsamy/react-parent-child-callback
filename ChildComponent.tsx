import React, { useState } from 'react';

export interface IProps {
  name: string;
  callback: (param: string) => void;
}

const ChildComponent: React.FunctionComponent<IProps> = props => {
  const [userName, setUserName] = useState<string>(props.name);

  const updateInput = e => {
    props.callback(e.target.value);
    setUserName(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={userName} onChange={updateInput} />
        <div>child: {userName}</div>
      </form>
    </div>
  );
};

export default ChildComponent;
