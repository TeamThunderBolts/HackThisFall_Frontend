import { useState, useContext } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    Button,
} from '@mantine/core';
import { BigHead } from '@bigheads/core'
import UserContext from '../../context/UserContext';
import "./Dashboard.scss";
import CreateTarget from '../../components/CreateTarget/CreateTarget';
import CreateTemplate from '../../components/CreateTemplate/CreateTemplate';
import CreateCampaign from '../../components/CreateCampaign/CreateCampaign';
import ListTargets from '../../components/ListTargets/ListTargets';

const Dashboard = () => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const user = useContext(UserContext);
    const [select, setSelect] = useState(0);

    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} >
                    <Navbar.Section grow mt="md">
                        <Button onClick={() => setSelect(0)} variant="outline" style={{width: '100%', margin: '5px 0'}}>
                            Add Targets
                        </Button>
                        <Button onClick={() => setSelect(1)} variant="outline" style={{width: '100%', margin: '5px 0'}}>
                            Create Template
                        </Button>
                        <Button onClick={() => setSelect(2)} variant="outline" style={{width: '100%', margin: '5px 0'}}>
                            Create Campaign
                        </Button>
                        <Button onClick={() => setSelect(3)} variant="outline" style={{width: '100%', margin: '5px 0'}}>
                            List Targets
                        </Button>
                    </Navbar.Section>
                    <Navbar.Section>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <div style={{ width: '50px' }}><BigHead /></div>
                            <Text>{user.username}</Text>
                        </div>
                    </Navbar.Section>
                </Navbar>
            }
            //   aside={
            //     <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            //       <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            //         <Text>Application sidebar</Text>
            //       </Aside>
            //     </MediaQuery>
            //   }
            //   footer={
            //     <Footer height={60} p="md">
            //       Application footer
            //     </Footer>
            //   }
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%', fontFamily: 'AquireBold', fontWeight: 'bold' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>
                        CallBot
                    </div>
                </Header>
            }
        >
            {
                select === 0 ?
                <CreateTarget /> :
                select === 1 ?
                <CreateTemplate /> :
                select === 2 ?
                <CreateCampaign /> :
                select === 3 ?
                <ListTargets /> :
                null
            }
        </AppShell>
    );
};

export default Dashboard;