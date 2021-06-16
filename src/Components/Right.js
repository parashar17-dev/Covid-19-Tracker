import React, { useContext } from 'react';
import Table from './Table';
import LineGraph from './LineGraph';
import { Card, CardContent } from '@material-ui/core';
import CovidContext from '../Context/CovidTracker/CovidContext';
function Right() {
   const covidContext = useContext(CovidContext);
   const { casesType } = covidContext;
   return (
      <Card className="app_right">
         <CardContent>
            <h3 className="table_title">Live cases by Country</h3>
            <Table></Table>
            <h3 className="app_graph_title">{`Worldwide new ${casesType} `}</h3>
            <LineGraph />
         </CardContent>
      </Card>
   );
}

export default Right;
