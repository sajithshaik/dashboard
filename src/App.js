import 'office-ui-fabric-react/dist/css/fabric.css';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav, initializeIcons } from '@fluentui/react';
import CardsSection from './CardsSection';
import GovernanceCore from './GovernanceCore';
import TenantList from './TenantList';
import Subscription from './Subscription';
import Domains from './Domains';
import Header from './Header';


const links = [
  {
      links: [
          {
              name: 'Dashboard',
              url: '/',
              key: 'key1',
              iconProps: {
                  iconName: 'Home',
                  styles: {
                      root: {
                         fontSize: 20,
                         color: '#106ebe' 
                      }
                  }
              }
          },
          {
              name: 'Subscription',
              url: '/subscription',
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
              name: 'Domains',
              url: '/domains',
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
              name: 'Check List',
              url: '/checklist',
              key: 'key4',
              iconProps: {
                  // iconName: 'SwitcherStartEnd',
                  iconName: 'CheckList',
                  styles: {
                      root: {
                          fontSize: 20,
                          color: '#106ebe' 
                      }
                  }
              }
          },
          {
            name: 'Tenant List',
            url: '/tenantslist',
            key: 'key5',
            iconProps: {
                 iconName: 'List',
                // iconName: 'PaymentCard',
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


const App = () => {
  initializeIcons();
  const [selectedKey, setSelectedKey] = useState('');

  const onLinkClick = (ev, item) => {
    setSelectedKey(item.key);
  };

  return (
    <Router>
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <Header />
          <div className="ms-Grid-col ms-sm-1 ms-xl1">
            {/* Navigation component */}
            <Nav
              groups={links}
              selectedKey={selectedKey}
              styles={navigationStyles}
              onLinkClick={onLinkClick}
            />
          </div>
          {/* <h2 className="notes">Admin Dashboard</h2> */}
          <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
            <div className="ms-Grid-row">
              {/* Content based on the route */}
              <Routes>
                <Route path="/" element={<CardsSection />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/domains" element={<Domains />} />
                <Route path="/checklist" element={<GovernanceCore />} />
                <Route path="/tenantslist" element={<TenantList />} />
                {/* Add routes for /securescore, /adoptionscore, /settings as needed */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};



export default App;
