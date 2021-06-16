import React, { useContext } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import CovidContext from '../Context/CovidTracker/CovidContext';
import '../Css-Files/InfoBox.css';

function Infobox({ title, cases, total, types, IsRed }) {
   const covidContext = useContext(CovidContext);
   const { setCasesType, casesType } = covidContext;
   const active = types === casesType;
   const greenactive = active && !IsRed;
   return (
      <Card
         className={`InfoBox ${active && 'active'} ${
            greenactive && 'active-green'
         }`}
         onClick={(e) => setCasesType(types)}
      >
         <CardContent>
            <Typography color="textSecondary" className="infobox_title">
               {title}
            </Typography>

            <h2 className={`infobox_cases ${!IsRed && 'green'}`}>{cases}</h2>

            <Typography color="textSecondary" className="infobox_total">
               {total} Total
            </Typography>
         </CardContent>
      </Card>
   );
}

export default Infobox;
