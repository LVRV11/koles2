import React from 'react';
import PageTitle from './pageTitle/PageTitle';
import EventBoard from './EventsBoard/EventsBoard';
import upcomingEvents from '../upcoming-events.json'
import { FaBeer } from 'react-icons/fa';


const App = () => {
	return <div>
				<FaBeer />
				<PageTitle text="24th Core Worlds Coalition Confernce"/>
				<EventBoard events={upcomingEvents}/>
		   </div>;
}

export default App;