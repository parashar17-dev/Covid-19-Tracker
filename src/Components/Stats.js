import React, { useContext } from 'react';
import Infobox from './Infobox';
import CovidContext from '../Context/CovidTracker/CovidContext';
import { prettyPrintStat } from './util';
function Stats() {
   const covidContext = useContext(CovidContext);
   const { countryInfo } = covidContext;
   return (
      <div className="app_stats">
         {/* Number of Today's and total cases */}
         <Infobox
            types="cases"
            IsRed={true}
            title="Coronavirus Cases"
            total={prettyPrintStat(countryInfo.cases)}
            cases={prettyPrintStat(countryInfo.todayCases)}
         />

         {/* Number of Today's recovered and total recovered */}
         <Infobox
            IsRed={false}
            types="recovered"
            title="Recovered"
            total={prettyPrintStat(countryInfo.recovered)}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
         />

         {/* Number of Today's death and total death cases */}
         <Infobox
            IsRed={true}
            types="deaths"
            title="Death"
            total={prettyPrintStat(countryInfo.deaths)}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
         />
      </div>
   );
}

export default Stats;
