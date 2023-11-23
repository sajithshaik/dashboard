import React from 'react';
import {Card} from'@uifabric/react-cards'
import { Text, initializeIcons } from '@fluentui/react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';
import LinechartComponent from './LinechartComponent'

const cards = [
    {
        title: 'Secure Score',
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
      recommendedaction: 'Ensure Multifactor authentication is enabled',
      scoreimpact: '2.87%',
      status: 'To address',
      category: 'Identity',
    },
    {
      recommendedaction: 'Block users who reached message limit',
      scoreimpact: '2.87%',
      status: 'To address',
      category: 'Apps',
    },
    {
      recommendedaction: 'Set the Phishing Email level Treshold',
      scoreimpact: '2.87%',
      status: 'To address',
      category: 'Apps',
    },
    {
      recommendedaction: 'Enable Impersonated User Protection',
      scoreimpact: '2.87%',
      status: 'To address',
      category: 'Apps',
    },
    {
      recommendedaction: 'Enable Impersonated Domain Protection',
      scoreimpact: '2.87%',
      status: 'To address',
      category: 'Apps',
    },
]

const columns = [
    {key: 'column', name: 'Recommended action', fieldName: 'recommendedaction', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Score impact', fieldName: 'scoreimpact', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Status', fieldName: 'status', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Category', fieldName: 'category', minWidth: 100, maxWidth: 300, isResizable: true},
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



const SecureScore = () => {
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
                    <LinechartComponent />
                </div>
            )) }
        </div>
        <div className="ms-Grid-row">
        <OperationsTable />
      </div>
    </>  
    );
}

export default SecureScore;
