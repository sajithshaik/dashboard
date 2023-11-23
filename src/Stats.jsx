import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';
import ArechartComponent from './AreachartComponent';

const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
    },
});

const operations = [
    {
      name: 'Microsoft 365 E5 Developer',
      activeusers: '15',
      inactiveusers: '10/25',
      date: '20-05-2023',
    },
    {
      name: 'Microsoft Dynamics AX7 User Trail',
      activeusers: '9994',
      inactiveusers: '6/1000',
      date: '19-05-2023',
    },
    {
      name: 'Microsoft Power Automate Free',
      activeusers: '9991',
      inactiveusers: '9/1000',
      date: '18-05-2023',
    },
    {
      name: 'Microsoft Sharepoint Free',
      activeusers: '9996',
      inactiveusers: '9/1000',
      date: '18-05-2023',
    },
    {
      name: 'Microsoft Power BI Free',
      activeusers: '9995',
      inactiveusers: '6/1000',
      date: '17-05-2023',
    },
]

const container = {
  display: 'flex',
  justifyContent: 'center',
  margin: '15vh 0',
}

const columns = [
    {key: 'column', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Available Licenses', fieldName: 'activeusers', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Assigned Licenses', fieldName: 'inactiveusers', minWidth: 100, maxWidth: 300, isResizable: true},
    // {key: 'column', name: 'Last activity', fieldName: 'date', minWidth: 100, maxWidth: 300, isResizable: true},
]

const Stats = () => {
    return(
      <div style={container}>
        {/* <div data-is-scrollable={true}> */}
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
                <DetailsList
                    items={operations}
                    columns={columns}
                    selectionMode={0}
                />
            </div>
           {/* <ArechartComponent />  */}
        </div>
      // </div>  
    );
}

export default Stats;


