import React, { useState } from 'react';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Icon } from '@fluentui/react/lib/Icon';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { Modal } from '@fluentui/react/lib/Modal';


const operations = [
  {
    name: 'Security Defaults',
    type: 'Exchange',
    description: 'Exchange Data on Microsoft 365',
    // status: 'Yes/No/NA',
    status: 'Yes',
    lastCheckedIn: '2023-01-01, 12:00 PM',
  },
  {
    name: 'Global Admin accounts',
    type: 'Azure AD',
    description: 'Azure AD Data on Microsoft 365',
    // status: 'Yes/ No',
    status: 'Yes',
    lastCheckedIn: '2023-01-01, 01:00 PM',
  },
  {
    name: 'MFA on all Users',
    type: 'Sharepoint',
    description: 'Sharepoint Data on Microsoft 365',
    // status: 'Yes/No',
    status: 'Yes',
    lastCheckedIn: '2023-01-01, 02:00 PM',
  },
  {
    name: 'DNS Records for all Domains',
    type: 'OneDrive',
    description: 'OneDrive Data on Microsoft 365',
    // status: 'Yes/No',
    status: 'Yes',
    lastCheckedIn: '2023-01-01, 03:00 PM',
  },
  {
    name: 'AD Sync Errors',
    type: 'Exchange',
    description: 'Exchange Data on Microsoft 365',
    // status: 'Yes/No/NA',
    status: 'Yes',
    lastCheckedIn: '2023-01-01, 04:00 PM',
  },
  {
      name: 'Email Standard Protection',
      type: 'Azure AD',
      description: 'Azure Data on Microsoft 365',
      // status: 'On/Off',
      status: 'On',
      lastCheckedIn: '2023-01-01, 05:00 PM',
    },
    {
      name: 'Alerts Configured',
      type: 'Sharepoint',
      description: 'Sharepoint Data on Microsoft 365',
      // status: 'On/Off/License Unavailable',
      status: 'License Unavailable',
      lastCheckedIn: '2023-01-01, 06:00 PM',
    },

    {
      name: 'Block Legacy Protocols',
      type: 'OneDrive',
      description: 'OneDrive Data on Microsoft 365',
      // status: 'Yes/No',
      status: 'No',
      lastCheckedIn: '2023-01-01, 07:00 PM',
    },

    {
      name: 'External Sharing Guests',
      type: 'Exchange',
      description: 'Exchange Data on Microsoft 365',
      // status: 'Yes/No',
      status: 'Yes',
      lastCheckedIn: '2023-01-01, 08:00 PM',
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const columns = [
    {
      key: 'fieldName',
      name: 'Title',
      fieldName: 'name',
      minWidth: 250,
      maxWidth: 300,
      isResizable: true,
      onRender: (item) => (
        <div style={{ display: 'flex', alignItems: 'center',}}>
          <span>{item.name}</span>
          <TooltipHost content={`Additional information for ${item.name}`}>
            <Icon iconName="Info" style={{ marginLeft: '4px', cursor: 'pointer' }} onClick={() => openModal(item.description)} />
          </TooltipHost>
        </div>
      ),
    },
    {
      key: 'type',
      name: 'Type',
      fieldName: 'type',
      minWidth: 150,
      maxWidth: 200,
      isResizable: true,
    },
    // {
    //   key: 'description',
    //   name: 'Description',
    //   fieldName: 'description',
    //   minWidth: 250,
    //   maxWidth: 300,
    //   isResizable: true,
    // },
    {
      key: 'status',
      name: 'Status',
      fieldName: 'status',
      minWidth: 250,
      maxWidth: 300,
      isResizable: true,
      // onRender: (item) => <CheckboxColumn status={item.status} />,
    },
    {
      key: 'lastCheckedIn',
      name: 'Last Checked',
      fieldName: 'lastCheckedIn',
      minWidth: 100,
      maxWidth: 150,
      isResizable: true,
    },
  ];  

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
    <Modal
        isOpen={isModalOpen}
        onDismiss={closeModal}
        isBlocking={false}
      >
        <div>
          <p>{modalContent}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
   </div> 
  );
};

export default GovernanceCore;


