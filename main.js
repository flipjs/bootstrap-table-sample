import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import React from 'react'
import ReactDOM from 'react-dom'
import data from './data'
import './css/react-bootstrap-table-all.css'
import './css/custom.css'

function onRowSelect (row, isSelected) {
  console.log(row)
  console.log('selected: ' + isSelected)
}

var selectRowProp = {
  mode: 'radio',
  clickToSelect: true,
  bgColor: 'rgb(238, 193, 213)',
  onSelect: onRowSelect,
  hideSelectColumn: true
}

ReactDOM.render(
  <div className='container'>
    <h3>Table [{' ' + data.length + ' '}]</h3>
    <BootstrapTable data={data} search striped hover pagination selectRow={selectRowProp}>
      <TableHeaderColumn
        dataField='id'
        isKey
        dataAlign='right'
        dataSort>
        ID
      </TableHeaderColumn>
      <TableHeaderColumn dataField='domain' dataSort>
        Domain
      </TableHeaderColumn>
      <TableHeaderColumn dataField='subDomain' dataSort>
        Sub-Domain
      </TableHeaderColumn>
      <TableHeaderColumn dataField='ip' dataSort>
        IP Address
      </TableHeaderColumn>
    </BootstrapTable>
  </div>,
  document.getElementById('root')
)

