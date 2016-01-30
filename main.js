import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import React from 'react'
import ReactDOM from 'react-dom'
import data from './data'
import './css/react-bootstrap-table-all.css'
import './css/custom.css'

// function onRowSelect (row, isSelected) {
//   console.log(row)
//   console.log('selected: ' + isSelected)
// }

const onClick = (cell, row) => {
  console.log('cell:', cell)
  console.log('row:', row)
}

const cursorClass = {
  cursor: 'pointer'
}

const dataFormat = (cell, row) => {
  return (
    <div style={cursorClass} onClick={() => onClick(cell, row)}>{cell}</div>
  )
}

// var selectRowProp = {
//   mode: 'radio',
//   clickToSelect: true,
//   bgColor: 'rgb(238, 193, 213)',
//   onSelect: onRowSelect,
//   hideSelectColumn: true
// }

ReactDOM.render(
  <div className='container'>
    <h3>Table [{' ' + data.length + ' '}]</h3>
    <BootstrapTable data={data} bordered={false} search striped hover pagination options={{clearSearch: true}}>
      <TableHeaderColumn
        dataField='id'
        isKey
        dataAlign='right'
        width='50'
        dataSort>
        ID
      </TableHeaderColumn>
      <TableHeaderColumn dataField='domain' dataSort>
        Domain
      </TableHeaderColumn>
      <TableHeaderColumn dataField='subDomain' dataSort>
        Sub-Domain
      </TableHeaderColumn>
      <TableHeaderColumn dataField='ip' dataFormat={dataFormat} dataSort>
        IP Address
      </TableHeaderColumn>
    </BootstrapTable>
  </div>,
  document.getElementById('root')
)

