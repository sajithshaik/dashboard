import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';

const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
    },
});

const operations = [
    {
      name: 'Microsoft 365 E5 Developer',
      availablelicenses: '15',
      assignedlicenses: '10/25',
      date: '20-05-2023',
    },
    {
      name: 'Microsoft Dynamics AX7 User Trail',
      availablelicenses: '9994',
      assignedlicenses: '6/1000',
      date: '19-05-2023',
    },
    {
      name: 'Microsoft Power Automate Free',
      availablelicenses: '9991',
      assignedlicenses: '9/1000',
      date: '18-05-2023',
    },
    {
      name: 'Microsoft Sharepoint Free',
      availablelicenses: '9996',
      assignedlicenses: '9/1000',
      date: '18-05-2023',
    },
    {
      name: 'Microsoft Power BI Free',
      availablelicenses: '9995',
      assignedlicenses: '6/1000',
      date: '17-05-2023',
    },
]

const columns = [
    {key: 'column', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Licensed Users', fieldName: 'availablelicenses', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Un-Licensed Users', fieldName: 'assignedlicenses', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Last activity', fieldName: 'date', minWidth: 100, maxWidth: 300, isResizable: true},
]

const OperationsTable = () => {
    return(
        <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
                <DetailsList
                    items={operations}
                    columns={columns}
                    selectionMode={0}
                />
            </div>
        </div>
    );
}

export default OperationsTable;


