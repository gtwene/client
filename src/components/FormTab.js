import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FirstForm from './formTabs.js/FirstForm';
import FourthForm from './formTabs.js/FourthForm';
import SecondForm from './formTabs.js/SecondForm';
import ThirdForm from './formTabs.js/ThirdForm';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

function FormTab() {
  const [key, setKey] = useState('home');

  return (
    <Row className=''>
        <Col>
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 sm:border-2 sm:border-gray-300 rounded"
            variant="pills"
            >
            <Tab eventKey="home" title="Bond/Guarantee Parties" className=''>
                <FirstForm />
            </Tab>
            <Tab eventKey="profile" title="Commitment/Bank Instruction Details">
                <SecondForm />
            </Tab>
            <Tab eventKey="contact" title="Guarantee Document">
                <ThirdForm />
            </Tab>
            <Tab eventKey="Charges" title="Charges">
                <FourthForm />
            </Tab>
            </Tabs>
            </Col>
    </Row>
  );
}

export default FormTab;