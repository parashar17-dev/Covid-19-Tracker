import React, { useContext } from 'react';
import '../Css-Files/Table.css';
import numeral from 'numeral';
import CovidContext from '../Context/CovidTracker/CovidContext';
function Table() {
   const covidContext = useContext(CovidContext);
   const { tableData } = covidContext;
   return (
      <div className="table">
         {tableData.map(({ country, cases }) => (
            <tr>
               <td>{country}</td>
               <td>
                  <strong>{numeral(cases).format('0,0')}</strong>
               </td>
            </tr>
         ))}
      </div>
   );
}

export default Table;
