import React from 'react';
import {SimpleForm} from "./simpleForm/SimpleForm";
import {FormWithValidation} from "./formWithValidation/FormWithValidation";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import {FormWithAdvancedValidation} from "./formWithAdvancedValidation/FormWithAdvancedValidation";

function App() {
  return (
    <div className="App">
      <Page>
      <Tabs>
        <TabList>
          <Tab>Simple form</Tab>
          <Tab>Form with validation</Tab>
          <Tab>Form with advanced validation</Tab>
        </TabList>

        <TabPanel>
          <SimpleForm />
        </TabPanel>
        <TabPanel>
          <FormWithValidation />
        </TabPanel>
        <TabPanel>
          <FormWithAdvancedValidation />
        </TabPanel>
      </Tabs>

</Page>
    </div>
  );
}

const Page = styled.div`
margin: 50px;
;`

export default App;
