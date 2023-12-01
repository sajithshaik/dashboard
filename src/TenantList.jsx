import React from 'react';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const operations = [
  {
    primarydomain: 'create9z.onmicrosoft.com',
    tenantid: '18606560-d0da-4bbf-9059-6dd00b8897aa',
    dateonboarded: '2023-01-01',
    relationship: 'Active',
  },
  {
    primarydomain: 'xgmpc.onmicrosoft.com',
    tenantid: '18606560-d0da-4bbf-9059-6dd00b8898aa',
    dateonboarded: '2023-01-01',
    relationship: 'In-Active', 
  },
  {
    primarydomain: 'sajith@xgmpc.onmicrosoft.com',
    tenantid: '18606560-d0da-4bbf-9059-6dd00b8896aa',
    dateonboarded: '2023-01-01',
    relationship: 'Active',
  },
  {
    primarydomain: 'swamy@xgmpc.onmicrosoft.com',
    tenantid: '18606560-d0da-4bbf-9059-6dd00b8895aa',
    dateonboarded: '2023-01-01',
    relationship: 'Active',
  },
  {
    primarydomain: 'harish@xgmpc.onmicrosoft.com',
    tenantid: '18606560-d0da-4bbf-9059-6dd00b8894aa',
    dateonboarded: '2023-01-01',
    relationship: 'Active',
  },
  {
    primarydomain: 'julkhair@xgmpc.onmicrosoft.com',
    tenantid: '18606560-d0da-4bbf-9059-6dd00b8893aa',
    dateonboarded: '2023-01-01',
    relationship: 'Active',
    },
    {
        primarydomain: 'fayaz@xgmpc.onmicrosoft.com',
        tenantid: '18606560-d0da-4bbf-9059-6dd00b8892aa',
        dateonboarded: '2023-01-01',
        relationship: 'Active',
    },

    {
        primarydomain: 'krithika@xgmpc.onmicrosoft.com',
        tenantid: '18606560-d0da-4bbf-9059-6dd00b8891aa',
        dateonboarded: '2023-01-01',
        relationship: 'Active',
    },

    {
        primarydomain: 'sandip@xgmpc.onmicrosoft.com',
        tenantid: '18606560-d0da-4bbf-9059-6dd00b8890aa',
        dateonboarded: '2023-01-01',
        relationship: 'Active',
    },
];


const columns: IColumn[] = [
  {
    key: 'primarydomain',
    name: 'Primary Domain',
    fieldName: 'primarydomain',
    minWidth: 250,
    maxWidth: 300,
    isResizable: true,
  },
  {
    key: 'tenantid',
    name: 'Tenant ID',
    fieldName: 'tenantid',
    minWidth: 250,
    maxWidth: 300,
    isResizable: true,
  },
  {
    key: 'dateonboarded',
    name: 'Date on-boarded',
    fieldName: 'dateonboarded',
    minWidth: 250,
    maxWidth: 300,
    isResizable: true,
  },
  {
    key: 'relationship',
    name: 'Partner Relationship',
    fieldName: 'relationship',
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

const TenantList = () => {
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

export default TenantList;


