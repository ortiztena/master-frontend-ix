import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { EmployeeInfo } from './employee.vm';

interface Props {
  employee: EmployeeInfo;
  onSave: (employee: EmployeeInfo) => void;
  onCancel: () => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const Employee: React.FC<Props> = props => {
  const { employee, onSave, onCancel } = props;

  const [tab, setTab] = React.useState(0);
  return (
    <>
      <AppBar position="static">
        <Tabs value={tab} onChange={null}>
          <Tab label="Datos" />
          <Tab label="Proyectos" />
          <Tab label="Informes" />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        <>{employee.name}</>
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <h3>Hello from projects tab</h3>
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <h3>Hello from report tab</h3>
      </TabPanel>
    </>
  );
};
