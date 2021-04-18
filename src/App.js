import data from './data.json'
import 'rsuite/dist/styles/rsuite-default.css';
import { TagPicker } from 'rsuite';

function App() {

  return (
    <div className="App">
      <TagPicker data={data} style={{ width: 300 }}  />
    </div>
  );
}

export default App;
