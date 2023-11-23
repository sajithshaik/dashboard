import React from 'react';
import {Card} from'@uifabric/react-cards'
import { Text, initializeIcons } from '@fluentui/react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';
import RadarChart from './RadarChart';

const cards = [
    {
        title: 'Licensed Users',
        amount: '6/100',
        // icon: 'Money',
        icon: 'Savings',
        percentage: '6.5',
    },
    {
        title: 'Un-Licensed Users',
        amount: '21/700',
        icon: 'Savings',
        percentage: '0.3',
    },
]

const container = {
    display: 'flex',
    justifyContent: 'center',
    margin: '15vh 0',
}

const icon = {
    fontSize: 24,
    padding: 15,
    verticalAlign: 'middle',
    paddingLeft: 0,
    color: '#0078d4',
}

const styles = {
    cardStyles: {
        root: {
            backgroundColor: '#fff',
            padding: 20,
            borderTop: '5px solid #0078d4',
            width: '90%',
            maxWidth: '90%',
            margin: 'auto',
        }
    },
    header: {
        root: {
            fontSize: 20,
            fontWeight: 'bold',
        }
    },
    amount: {
        root: {
            fontSize: 26,
            paddingBottom: 20,
            paddingTop: 30,
        }
    },
    percentage: {
        root: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#0078d4',
        }
    }
}


const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
    },
});

const operations = [
    {
      name: 'xgmpc.onmicrosoft.com(Default)',
      availablelicenses: 'Healthy',
    },
    {
      name: 'Sajith@xgmpc.onmicrosoft.com',
      availablelicenses: 'Healthy',
    },
    {
      name: 'Swamy@xgmpc.onmicrosoft.com',
      availablelicenses: 'Healthy',
    },
    {
      name: 'Harish@xgmpc.onmicrosoft.com',
      availablelicenses: 'Healthy',
    },
    {
      name: 'Julkhair@xgmpc.onmicrosoft.com',
      availablelicenses: 'Healthy',
    },
    {
        name: 'Fayaz@xgmpc.onmicrosoft.com',
        availablelicenses: 'Healthy',
      },
      {
        name: 'Krithika@xgmpc.onmicrosoft.com',
        availablelicenses: 'Healthy',
      },

]

const columns = [
    {key: 'column', name: 'Domain Name', fieldName: 'name', minWidth: 250, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Status', fieldName: 'availablelicenses', minWidth: 250, maxWidth: 300, isResizable: true},
]

const Licenses = () => {
    return(
        <>
        <div style={container}>
        {/* <div data-is-scrollable={true}> */}
            <div className={`s-Grid-col ms-sm6 ms-xl6 ${classNames.table}`}>
                <DetailsList
                    items={operations}
                    columns={columns}
                    selectionMode={0}
                />
            </div>
        {/* </div> */}
        </div>
     </>   
    );
}

export default Licenses;




// const Licenses = () => {
//     initializeIcons();

//     return(
//         <>
//         <div style={container}>
//             {cards.map((card) => (
//                 <div className="s-Grid-col ms-sm3 ms-xl3">
//                     {/* <Card styles={styles.cardStyles}>
//                         <Card.Section>
//                             <Card.Item>
//                                 <i style={icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
//                                 <Text style={styles.header}>{card.title}</Text>
//                             </Card.Item>
//                             <Card.Item>
//                                 <Text style={styles.amount}>{card.amount}</Text>
//                             </Card.Item>
//                             <Card.Item>
//                                 <Text style={styles.percentage}>{card.percentage}%</Text>
//                             </Card.Item>
//                         </Card.Section>
//                     </Card> */}
//                   {/* <RadarChart />  */}
//                 </div>
//             )) }
//         </div>
//         <div className="ms-Grid-row">
//         <OperationsTable />
//       </div>
//        </>
//     );
// }

// export default Licenses;

// import React from 'react';
// import { DetailsList, DetailsListLayoutMode, SelectionMode} from '@fluentui/react/lib/DetailsList';
// import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
// import { Text } from '@fluentui/react/lib/Text';
// import { Card } from '@uifabric/react-cards';
// import 'office-ui-fabric-react/dist/css/fabric.css';

// const operations = [
//   {
//     name: 'xgmpc.onmicrosoft.com(Default)',
//     availablelicenses: 'Healthy',
//   },
//   {
//     name: 'Sajith@xgmpc.onmicrosoft.com',
//     availablelicenses: 'Healthy',
//   },
//   // ... (other items)
// ];

// const columns = [
//   { key: 'column1', name: 'Domain Name', fieldName: 'name', minWidth: 250, maxWidth: 300, isResizable: true },
//   { key: 'column2', name: 'Status', fieldName: 'availablelicenses', minWidth: 250, maxWidth: 300, isResizable: true },
// ];

// const classNames = mergeStyleSets({
//   table: {
//     margin: 'auto',
//   },
// });

// const Licenses = () => {
//   return (
//     <>
//       <div style={{ display: 'flex', justifyContent: 'center', margin: '15vh 0' }}>
//         <div className={`s-Grid-col ms-sm6 ms-xl6 ${classNames.table}`}>
//           <DetailsList
//             items={operations}
//             columns={columns}
//             setKey="set"
//             layoutMode={DetailsListLayoutMode.fixedColumns}
//             selectionMode={SelectionMode.none}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Licenses;

// import React from 'react';
// import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from '@fluentui/react';
// import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

// const operations = [
//   {
//     name: 'Security Defaults',
//     status: 'Yes/No/NA',
//   },
//   {
//     name: 'Global Admin accounts',
//     status: 'Yes/ No',
//   },
//   // ... (other data)
// ];

// const columns: IColumn[] = [
//   {
//     key: 'fieldName',
//     name: 'Field Name',
//     fieldName: 'name',
//     minWidth: 250,
//     maxWidth: 300,
//     isResizable: true,
//   },
//   {
//     key: 'status',
//     name: 'Status',
//     fieldName: 'status',
//     minWidth: 250,
//     maxWidth: 300,
//     isResizable: true,
//     onRender: (item) => {
//       // Assuming 'status' is a string containing 'Yes/No' or similar
//       const isChecked = item.status.toLowerCase() === 'yes';

//       return <input type="checkbox" checked={isChecked} readOnly />;
//     },
//   },
// ];

// const classNames = mergeStyleSets({
//   table: {
//     margin: 'auto',
//   },
// });

// const Licenses = () => {
//   const selection = new Selection({ selectionMode: SelectionMode.none });

//   return (
//     <div className={`s-Grid-col ms-sm6 ms-xl6 ${classNames.table}`}>
//       <DetailsList
//         items={operations}
//         columns={columns}
//         selection={selection}
//         selectionMode={SelectionMode.none}
//         layoutMode={DetailsListLayoutMode.fixedColumns}
//       />
//     </div>
//   );
// };

// export default Licenses;

// import React from 'react';
// import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from '@fluentui/react';
// import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

// const operations = [
//   {
//     name: 'Security Defaults',
//     status: 'Yes/No/NA',
//   },
//   {
//     name: 'Global Admin accounts',
//     status: 'Yes/ No',
//   },
//   // ... (other data)
// ];

// const columns: IColumn[] = [
//   {
//     key: 'fieldName',
//     name: 'Field Name',
//     fieldName: 'name',
//     minWidth: 250,
//     maxWidth: 300,
//     isResizable: true,
//   },
//   {
//     key: 'status',
//     name: 'Status',
//     fieldName: 'status',
//     minWidth: 250,
//     maxWidth: 300,
//     isResizable: true,
//     onRender: (item) => {
//       const values = item.status.split('/');
//       const checkboxGroup = values.map((value, index) => (
//         <div key={index} style={{ marginRight: '8px' }}>
//           <input type="checkbox" checked={value.toLowerCase() === 'yes'} readOnly />
//           <span>{value}</span>
//         </div>
//       ));

//       return <div>{checkboxGroup}</div>;
//     },
//   },
// ];

// const classNames = mergeStyleSets({
//   table: {
//     margin: 'auto',
//   },
// });

// const Licenses = () => {
//   const selection = new Selection({ selectionMode: SelectionMode.none });

//   return (
//     <div className={`s-Grid-col ms-sm6 ms-xl6 ${classNames.table}`}>
//       <DetailsList
//         items={operations}
//         columns={columns}
//         selection={selection}
//         selectionMode={SelectionMode.none}
//         layoutMode={DetailsListLayoutMode.fixedColumns}
//       />
//     </div>
//   );
// };

// export default Licenses;

// import React, { useState } from 'react';
// import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from '@fluentui/react';
// import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

// const operations = [
//   {
//     name: 'Security Defaults',
//     status: 'Yes/No/NA',
//   },
//   {
//     name: 'Global Admin accounts',
//     status: 'Yes/ No',
//   },
//   // ... (other data)
// ];

// const columns: IColumn[] = [
//   {
//     key: 'fieldName',
//     name: 'Field Name',
//     fieldName: 'name',
//     minWidth: 250,
//     maxWidth: 300,
//     isResizable: true,
//   },
//   {
//     key: 'status',
//     name: 'Status',
//     fieldName: 'status',
//     minWidth: 250,
//     maxWidth: 300,
//     isResizable: true,
//     onRender: (item) => {
//       const values = item.status.split('/');
//       const [selectedValue, setSelectedValue] = useState(values[0]); // State to track the selected value

//       const handleCheckboxChange = (value) => {
//         setSelectedValue(value);
//       };

//       const checkboxGroup = values.map((value, index) => (
//         <div key={index} style={{ marginRight: '8px', display: 'inline-block' }}>
//           <input
//             type="checkbox"
//             checked={value === selectedValue}
//             onChange={() => handleCheckboxChange(value)}
//           />
//           <span>{value}</span>
//         </div>
//       ));

//       return <div>{checkboxGroup}</div>;
//     },
//   },
// ];

// const classNames = mergeStyleSets({
//   table: {
//     margin: 'auto',
//   },
// });

// const Licenses = () => {
//   const selection = new Selection({ selectionMode: SelectionMode.none });

//   return (
//     <div className={`s-Grid-col ms-sm6 ms-xl6 ${classNames.table}`}>
//       <DetailsList
//         items={operations}
//         columns={columns}
//         selection={selection}
//         selectionMode={SelectionMode.none}
//         layoutMode={DetailsListLayoutMode.fixedColumns}
//       />
//     </div>
//   );
// };

// export default Licenses;


// import React, { useState } from 'react';
// import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from '@fluentui/react';
// import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

// const operations = [
//   {
//     name: 'Security Defaults',
//     status: 'Yes/No/NA',
//   },
//   {
//     name: 'Global Admin accounts',
//     status: 'Yes/ No',
//   },
//   // ... (other data)
// ];

// const CheckboxColumn = ({ status }) => {
//   const values = status.split('/');
//   const [selectedValue, setSelectedValue] = useState(values[0]);

//   const handleCheckboxChange = (value) => {
//     setSelectedValue(value);
//   };

//   const checkboxGroup = values.map((value, index) => (
//     <div key={index} style={{ marginRight: '8px', display: 'inline-block' }}>
//       <input
//         type="checkbox"
//         checked={value === selectedValue}
//         onChange={() => handleCheckboxChange(value)}
//       />
//       <span>{value}</span>
//     </div>
//   ));

//   return <div>{checkboxGroup}</div>;
// };

// const columns: IColumn[] = [
//   {
//     key: 'fieldName',
//     name: 'Field Name',
//     fieldName: 'name',
//     minWidth: 250,
//     maxWidth: 300,
//     isResizable: true,
//   },
//   {
//     key: 'status',
//     name: 'Status',
//     fieldName: 'status',
//     minWidth: 250,
//     maxWidth: 300,
//     isResizable: true,
//     onRender: (item) => <CheckboxColumn status={item.status} />,
//   },
// ];

// const classNames = mergeStyleSets({
//   table: {
//     margin: 'auto',
//   },
// });

// const Licenses = () => {
//   const selection = new Selection({ selectionMode: SelectionMode.none });

//   return (
//     <div className={`s-Grid-col ms-sm6 ms-xl6 ${classNames.table}`}>
//       <DetailsList
//         items={operations}
//         columns={columns}
//         selection={selection}
//         selectionMode={SelectionMode.none}
//         layoutMode={DetailsListLayoutMode.fixedColumns}
//       />
//     </div>
//   );
// };

// export default Licenses;



