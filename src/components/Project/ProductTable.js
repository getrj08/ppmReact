var React = require('react');
var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');
const { Component } = require('react');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

class ProductTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products : [
                {
                    id: 1,
                    name: "Product1",
                    price: 120
                }, 
                {
                  id: 2,
                    name: "Product2",
                    price: 80
                }
            ]
    }
  }

  render() {
    const uProjectTasks = this.props.userProjectTasks.projectTasks;
    console.log(this.props);
    console.log('rendering user project backlog tasks');
    console.log(uProjectTasks);
    
      return (
          <div id='table1'>
             <BootstrapTable data={this.state.products} striped hover>
              <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
              <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
          </div>
      )
  }
}

export default ProductTable
