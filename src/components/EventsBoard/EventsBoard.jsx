import { Event } from 'components/event/Event';
import PropTypes from 'prop-types';
import { Board } from 'components/App/EventBoard.styled';

const EventBoard = ({events}) => {
    return (
    <Board>
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
    </Board>
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