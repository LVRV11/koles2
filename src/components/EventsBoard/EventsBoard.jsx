import css from './EventsBoard.module.css';
import { Event } from 'components/event/Event';

const EventBoard = ({events}) => {
    return (
    <div className={css.eventBoard}>
        {events.map(({ name, location, speaker, type, time}) => (
            <Event 
            key={name} 
            name={name} 
            location={location}
            speaker={speaker}
            type={type}
            start={time.start}
            end={time.end}
            />
        ))}
    </div>
    );
};

export default EventBoard;