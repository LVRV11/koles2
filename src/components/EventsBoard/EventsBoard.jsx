import css from './EventsBoard.module.css';
import { Event } from 'components/event/Event';
import PropTypes from 'prop-types';

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

EventBoard.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            locatoin: PropTypes.string.isRequired,
            speaker:PropTypes.string.isRequired,
            types:PropTypes.string.isRequired,
            time:PropTypes.exact({
                start: PropTypes.string.isRequired,
                end: PropTypes.string.isRequired,
            }),
        })
    ),
}