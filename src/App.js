import './App.css';
import Table from './Table'
import Checkbox from './Checkbox'
import AgeInYears from './AgeInYears'

function App() {

  const data = [
    {
      key: 'UAX372',
      name: 'Allen',
      age: 35,
      foo: 'ASDF'
    },
    {
      key: 'UAX373',
      name: 'Bo',
      age: 28,
      foo: 'JDKG'
    },
    {
      key: 'UAX374',
      name: 'Charlie',
      age: 22,
      foo: 'WXYZ'
    },

  ]

  const headers = [
    {
      label: 'Select',
      key: 'select',
      component: Checkbox,
    },
    {
      label: 'Name',
      key: 'name',
    }, {
      label: 'Age in Years',
      key: 'age',
      component: AgeInYears,
    }, {
      label: 'Foo',
      key: 'foo'
    }
  ] 

  return (
    <div className="App">
      <div className="thisis">This is a Table</div>
      <Table headers={headers} data={data} />
    </div>
  );
}

export default App;
