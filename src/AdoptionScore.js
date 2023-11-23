import React from 'react';
import {Card} from'@uifabric/react-cards'
import { Text, initializeIcons } from '@fluentui/react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';
import PieChart from './PieChart';

const cards = [
    {
        title: 'Adoption Score',
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
      name: 'Encourage people to use Outlook mobile',
      relatedcategory: 'Mobility',
      relatedmetric: 'People using Outlook across Platforms',
      description: 'Using Outlook on mobile devices helps people stay connected and available',
    },
    {
      name: 'Encourage people to use @mentions in Outlook',
      relatedcategory: 'Communication',
      relatedmetric: 'New email threads receiving a response, by modes',
      description: 'Using @mentions in email improves response rate and focuses attention',
    },
    {
      name: 'Encouraging people to communicate using Teams',
      relatedcategory: 'Communication',
      relatedmetric: 'People communicating, by mode',
      description: 'Create a msg to encourage people in your org to use Teams',
    },
    {
      name: 'Encourage users to email files with cloud attachments',
      relatedcategory: 'Content collaboration',
      relatedmetric: 'People sharing files in email, by type',
      description: 'Emailing cloud attachments instead of links allows users to collaborate in real time',
    },
    {
      name: 'Encourage people to create files in sharepoint',
      relatedcategory: 'Content collaboration',
      relatedmetric: 'People creating files by location',
      description: 'Files saved to sharepoint or onedrive can be accessed by any device',
    },
]

const columns = [
    {key: 'column', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Related category', fieldName: 'relatedcategory', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Related metric', fieldName: 'relatedmetric', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Description', fieldName: 'description', minWidth: 100, maxWidth: 300, isResizable: true},
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
                 <PieChart />
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
