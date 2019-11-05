import React from 'react';

const TableRow = (props) => {
	return (
		<tr>
	   <td>{props.param1}</td>
	   <td>{props.param2}</td>
	   <td>{props.param3}</td>
    </tr>
	)
}

export default TableRow;