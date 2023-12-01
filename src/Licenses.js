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





