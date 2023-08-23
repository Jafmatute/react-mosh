import { useState } from 'react';
import Like from './components/Like';
import { produce } from 'immer';

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'bug1', fixed: false },
    { id: 2, title: 'bug2', fixed: false },
  ]);

  const handleClick = () => {
    //setBugs(bugs.map((bug) => (bug.id == 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id == 1);

        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      <Like onClick={() => {}} />
    </div>
  );
};

export default App;
