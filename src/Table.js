import "./App.css";
import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { headers, data } = this.props;
    return (
      <table>
        <thead className="headers">
          {/* <th>Name</th>
                    <th>Age</th> */}
          <tr>
            {headers.map((h) => {
              // value of h is {labe: 'Name', key: 'name',}
              return <th key={`heading-${h.key}`}>{h.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {/* <tr><td>Allen</td><td>35</td></tr>
                    <tr><td>Allen</td><td>35</td></tr>
                    <tr><td>Allen</td><td>35</td></tr> */}
          {data.map((rowData) => {
            //   rowData = {key: 'UAX372', name: 'Allen', age: 35}
            return (
              <tr key={`row-${rowData.key}`}>
                {/* <td>Allen</td>
                            <td>35</td> */}
                {/* <td>{rowData.name}</td>
                            <td>{rowData.age}</td> */}
                {headers.map((h) => {
                  // if (h.key === 'age'){
                  //     return <FancyBarChart key={`cell-${rowData.key}-${h.key}`} data={rowData[h.key]} />;
                  // } else {
                  //     return <td key={`cell-${rowData.key}-${h.key}`}>{rowData[h.key]}</td>
                  // }
                  const CellComponent = h.component;
                  if (CellComponent) {
                    return (
                      <CellComponent
                        key={`cell-${rowData.key}-${h.key}`}
                        data={rowData[h.key]}
                      />
                    );
                  } else {
                    return (
                      <td key={`cell-${rowData.key}-${h.key}`}>
                        {rowData[h.key]}
                      </td>
                    );
                  }
                })}
              </tr>
            );
            // return <RowContainer data={rowdata} headers={headers} />
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
