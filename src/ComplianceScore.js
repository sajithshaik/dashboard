import React from 'react';
import {Card} from'@uifabric/react-cards'
import { Text, initializeIcons } from '@fluentui/react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';
import BarchartComponent from './BarchartComponent';

const cards = [
    {
        title: 'Compliance Score',
        amount: '6/100',
        icon: 'Money',
        // icon: 'Savings',
        percentage: '6.5',
    },
]

const container = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10vh 0',
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
      improvementaction: 'Enable Safe DDL Search Mode',
      impact: '27 points',
      teststatus: 'None',
      group: 'Default group',
    },
    {
      improvementaction: 'Enable Consistent MIME Handling',
      impact: '27 points',
      teststatus: 'None',
      group: 'Default group',
    },
    {
      improvementaction: 'Enable risk based password change',
      impact: '27 points',
      teststatus: 'None',
      group: 'Default group',
    },
    {
      improvementaction: 'Enable MIME Sniffing Safety Feature',
      impact: '27 points',
      teststatus: 'None',
      group: 'Default group',
    },
    {
      improvementaction: 'Encrypt or sign secure channel data',
      impact: '27 points',
      teststatus: 'None',
      group: 'Default group',
    },
]

const columns = [
    {key: 'column', name: 'Improvement action', fieldName: 'improvementaction', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Impact', fieldName: 'impact', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Test Status', fieldName: 'teststatus', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Group', fieldName: 'group', minWidth: 100, maxWidth: 300, isResizable: true},
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



const ComplianceScore = () => {
    initializeIcons();

    return(
        <>
        <div style={container}>
            {cards.map((card) => (
                <div className="s-Grid-col ms-sm1 ms-xl1">
                    {/* <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <Card.Item>
                                <i style={icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
                                <Text style={styles.header}>{card.title}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text style={styles.amount}>{card.amount}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text style={styles.percentage}>{card.percentage}%</Text>
                            </Card.Item>
                        </Card.Section>
                    </Card> */}
                   <BarchartComponent /> 
                </div>
            )) }
        </div>
        <div className="ms-Grid-row">
        <OperationsTable />
      </div>
    </>  
    );
}

export default ComplianceScore;
