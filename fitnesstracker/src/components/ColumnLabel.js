import React, {Component} from 'react';
import "../components/styles/nav.css";


export class ColumnLabel extends Component {
render() {
return (
    <div className="container content labelz">
     {this.props.name}
    </div>
  );
}
}

export default ColumnLabel;
