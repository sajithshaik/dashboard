import React from 'react';
import {Card} from'@uifabric/react-cards'
import { Text, initializeIcons } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import LinechartComponent from './LinechartComponent';
import BarchartComponent from './BarchartComponent';
import PieChart from './PieChart';
import Linechart1 from './Linechart1';
import Barchart1 from './Barchart1';
import Piechart1 from './Piechart1';


const container = {
    display: 'flex',
    justifyContent: 'center',
    margin: '6vh 0',
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

const cards1 = [
    {
        title: 'Active Users',
        amount: '1,308',
        icon: 'SwitcherStartEnd',
    },
    {
        title: 'In-Active Users',
        amount: '1,800',
        icon: 'SwitcherStartEnd',
    },
]

const cards = [
    {
        title: 'Secure Score',
        yourScore: '65/100',
        // amount: '6/100',
        // icon: 'Money',
        icon: 'PaymentCard',
        organizationScore: '46.96/100',
        // percentage: '6.5',
        chartComponent: <PieChart />,
    },
    {
        title: 'Compilance Score',
        yourScore: '298/700',
        // amount: '21/700',
        icon: 'PaymentCard',
        organizationScore: '298/700',
        // percentage: '0.3',
        chartComponent: <PieChart />,
    },
    {
        title: 'Adoption Score',
        yourScore: '90/700',
        // amount: '90/700',
        // icon: 'Savings',
        icon: 'PaymentCard',
        organizationScore: '260/700',
        // percentage: '1.3',
        chartComponent: <PieChart />,
    },
]

const CardSections = () => {
    initializeIcons();

    return(
        <>
        <div style={container}>
                    {cards1.map((card) => (
                        <div key={card.title} className="s-Grid-col ms-sm3 ms-xl3">
                            <Card styles={styles.cardStyles}>
                                <Card.Section>
                                    <Card.Item>
                                        <i style={icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
                                        <Text style={styles.header}>{card.title}</Text>
                                    </Card.Item>
                                    <Card.Item>
                                        <Text style={styles.amount}>{card.amount}</Text>
                                    </Card.Item>
                                </Card.Section>
                            </Card>
                        </div>
                    ))}
                </div>
        <div style={container}>
            {cards.map((card) => (
                <div key={card.title} className="s-Grid-col ms-sm3 ms-xl3">
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <Card.Item>
                                <i style={icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
                                <Text style={styles.header}>{card.title}</Text>
                            </Card.Item>
                            <Card.Item>{card.chartComponent}</Card.Item>
                            <Card.Item>
                                <Text style={styles.amount}>{`Your Score: ${card.yourScore}`}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text style={styles.percentage}>{`Organization of a similar size: ${card.organizationScore}`}</Text>
                            </Card.Item>
                        </Card.Section>
                    </Card>
                </div>
            )) }
        </div>
        </>
    );
}

export default CardSections;



