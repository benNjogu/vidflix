import React, { Component } from "react";
import Like from "./like";
import _ from "lodash";

class TableBody extends Component {
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => {
              <td></td>;
            })}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
