import React, { useState } from 'react';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const operations = [
  {
    name: 'Security Defaults',
    status: 'Yes/No/NA',
  },
  {
    name: 'Global Admin accounts',
    status: 'Yes/ No',
  },
  {
    name: 'MFA on all Users',
    status: 'Yes/No',
  },
  {
    name: 'DNS Records for all Domains',
    status: 'Yes/No',
  },
  {
    name: 'AD Sync Errors',
    status: 'Yes/No/NA',
  },
  {
      name: 'Email Standard Protection',
      status: 'On/Off',
    },
    {
      name: 'Alerts Configured',
      status: 'On/Off/License Unavailable',
    },

    {
      name: 'Block Legacy Protocols',
      status: 'Yes/No',
    },

    {
      name: 'External Sharing Guests',
      status: 'Yes/No',
    },
];

const CheckboxColumn = ({ status }) => {
  const values = status.split('/');
  const [selectedValue, setSelectedValue] = useState(values[0]);
  const handleCheckboxChange = (value) => {
    setSelectedValue(value);
  };

  const checkboxGroup = values.map((value, index) => (
    <div key={index} style={{ marginRight: '8px', display: 'inline-block' }}>
      <input
        type="checkbox"
        checked={value === selectedValue}
        onChange={() => handleCheckboxChange(value)}
      />
      <span>{value}</span>
    </div>
  ));

  return <div>{checkboxGroup}</div>;
};

const columns: IColumn[] = [
  {
    key: 'fieldName',
    name: 'Field Name',
    fieldName: 'name',
    minWidth: 250,
    maxWidth: 300,
    isResizable: true,
  },
  {
    key: 'status',
    name: 'Status',
    fieldName: 'status',
    minWidth: 250,
    maxWidth: 300,
    isResizable: true,
    onRender: (item) => <CheckboxColumn status={item.status} />,
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

const GovernanceCore = () => {
  const selection = new Selection({ selectionMode: SelectionMode.none });

  return (
    <div style={container}>
    <div className={`s-Grid-col ms-sm6 ms-xl6 ${classNames.table}`}>
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

export default GovernanceCore;

