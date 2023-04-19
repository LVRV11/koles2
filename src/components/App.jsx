import React from 'react';
import PageTitle from './pageTitle/PageTitle';
import EventBoard from './EventsBoard/EventsBoard';
import upcomingEvents from '../upcoming-events.json'

const App = () => {
	return <div>
				<PageTitle text="24th Core Worlds Coalition Confernce"/>
				<EventBoard events={upcomingEvents}/>
		   </div>;
}

export default App;