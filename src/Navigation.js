import React, { useState } from 'react';
import { Nav, initializeIcons } from '@fluentui/react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Stats from './Stats';
import Licenses from './Licenses';
import ComplianceScore from './ComplianceScore';



const links = [
    {
        links: [
            {
                name: 'Dashboard',
                url: '/',
                key: 'key1',
                iconProps: {
                    iconName: 'News',
                    styles: {
                        root: {
                           fontSize: 20,
                           color: '#106ebe' 
                        }
                    }
                }
            },
            {
                name: 'Stats',
                url: '/stats',
                key: 'key2',
                iconProps: {
                    iconName: 'StackedLineChart',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe' 
                        }
                    }
                }
            },
            {
                name: 'Licenses',
                url: '/licenses',
                key: 'key3',
                iconProps: {
                     iconName: 'SwitcherStartEnd',
                    // iconName: 'PaymentCard',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe' 
                        }
                    }
                }
            },
            {
                name: 'Compilance Score',
                url: '/compilancescore',
                key: 'key4',
                iconProps: {
                    // iconName: 'SwitcherStartEnd',
                    iconName: 'PaymentCard',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe' 
                        }
                    }
                }
            },
            {
                name: 'Secure Score',
                url: '/securescore',
                key: 'key5',
                iconProps: {
                    // iconName: 'SwitcherStartEnd',
                    iconName: 'PaymentCard',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe' 
                        }
                    }
                }
            },
            {
                name: 'Adoption Score',
                url: '/adoptionscore',
                key: 'key6',
                iconProps: {
                    // iconName: 'SwitcherStartEnd',
                    iconName: 'PaymentCard',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe' 
                        }
                    }
                }
            },
            {
                name: 'Settings',
                url: '/settings',
                key: 'key7',
                iconProps: {
                    iconName: 'PlayerSettings',
                    styles: {
                        root: {
                           fontSize: 20,
                           color: '#106ebe' 
                        }
                    }
                }
            },
        ]
    }
]

const navigationStyles = {
    root: {
        height: '100vh',
        boxSizing: 'border-box',
        border: '1px solid #eee',
        overflow: 'auto',
        paddingTop: '10vh',
        backgroundColor: '#fff',
        width: 'fit-content',
    }
}

const Navigation = () => {
    initializeIcons();
    const [selectedKey, setSelectedKey] = useState('key1');

    const onLinkClick = (ev, item) => {
        setSelectedKey(item.key);

    };

    return(
        //  <Nav
        //  groups={links}
        // selectedKey="key1"
        // styles={navigationStyles}


        //  />
        <Router>
        <Nav
                groups={links}
                selectedKey={selectedKey}
                styles={navigationStyles}
                onLinkClick={onLinkClick}
            />
            <Routes>
                <Route path="/" element={''} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/licenses" element={<Licenses />} />
                <Route path="/compilancescore" element={<ComplianceScore />} />
                <Route path="/securescore" element={''} />
                <Route path="/adoptionscore" element={''} />
                <Route path="/settings" element={''} />
            </Routes>
            </Router> 
    );
}

export default Navigation;
