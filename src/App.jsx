import React from 'react';
import PageTitle from './components/pageTitle/PageTitle';
import EventBoard from './components/EventsBoard/EventsBoard';
import upcomingEvents from './upcoming-events';
import { Container } from 'components/App/App.styled';


const App = () => {
	return <Container>
				<PageTitle text="24th Core Worlds Coalition Confernce"/>
				<EventBoard events={upcomingEvents}/>
		   </Container>;
}

export default App;