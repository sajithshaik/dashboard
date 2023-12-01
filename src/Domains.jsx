import React from 'react';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const operations = [
  {
      domainname: 'create9z.onmicrosoft.com',
      status: 'Healthy',
  },
  {
      domainname: 'xgmpc.onmicrosoft.com',
      status: 'Healthy', 
  },
  {
      domainname: 'sajith@xgmpc.onmicrosoft.com',
      status: 'Healthy',
  },
  {
      domainname: 'swamy@xgmpc.onmicrosoft.com',
      status: 'Healthy',
  },
  {
      domainname: 'harish@xgmpc.onmicrosoft.com',
      status: 'Healthy',
  },
  {
       domainname: 'julkhair@xgmpc.onmicrosoft.com',
       status: 'Healthy',
    },
    {
       domainname: 'fayaz@xgmpc.onmicrosoft.com',
       status: 'Healthy',
    },

    {
       domainname: 'krithika@xgmpc.onmicrosoft.com',
       status: 'Healthy',
    },

    {
        domainname: 'sandip@xgmpc.onmicrosoft.com',
        status: 'Healthy',
    },
];


const columns: IColumn[] = [
  {
    key: 'domainname',
    name: 'Domain Name',
    fieldName: 'domainname',
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

const Domains = () => {
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

export default Domains;


