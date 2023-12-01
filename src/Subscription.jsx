import React from 'react';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const operations = [
    {
        name: 'Microsoft 365 E5 Developer',
        availablelicenses: '15',
        assignedlienses: '10/25',
      },
      {
        name: 'Microsoft Dynamics AX7 User Trail',
        availablelicenses: '9994',
        assignedlienses: '6/1000',
      },
      {
        name: 'Microsoft Power Automate Free',
        availablelicenses: '9991',
        assignedlienses: '9/1000',
      },
      {
        name: 'Microsoft Sharepoint Free',
        availablelicenses: '9996',
        assignedlienses: '9/1000',
      },
      {
        name: 'Microsoft Power BI Free',
        availablelicenses: '9995',
        assignedlienses: '6/1000',
      },
];


const columns: IColumn[] = [
  {
    key: 'name',
    name: 'Name',
    fieldName: 'name',
    minWidth: 250,
    maxWidth: 300,
    isResizable: true,
  },
  {
    key: 'availablelicenses',
    name: 'Available Licenses',
    fieldName: 'availablelicenses',
    minWidth: 250,
    maxWidth: 300,
    isResizable: true,
  },
  {
    key: 'assignedlienses',
    name: 'Assigned Licenses',
    fieldName: 'assignedlienses',
    minWidth: 250,
    maxWidth: 300,
    isResizable: true,
  },
];

const classNames = mergeStyleSets({
  table: {
    margin: 'auto',
  },
});

const container = {
    display: 'flex',
    justifyContent: 'center',
    margin: '15vh 0',
}

const Subscription = () => {
  const selection = new Selection({ selectionMode: SelectionMode.none });

  return (
    <div style={container}>
    <div className={`s-Grid-col ms-sm10 ms-xl10 ${classNames.table}`}>
      <DetailsList
        items={operations}
        columns={columns}
        selection={selection}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.fixedColumns}
      />
    </div>
   </div> 
  );
};

export default Subscription;


