import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock} from "react-icons/fa";
import { formatEventStart } from "utils/formatEventStart";
import { formatEventDuration } from "utils/formatEventsDuration";
import css from './Event.module.css';
import { Card, EventName, Info, Chip} from "components/App/Event.styled";



export const Event = ({ name, location, speaker, type, start, end}) => {
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end)
    return (
        <Card>
        <EventName>{name}</EventName>
        <Info><FaMapMarkerAlt size={26}/>{location}</Info>
        <Info><FaUserAlt size={26} />
            {speaker}
        </Info>
        <Info>
            <FaCalendarAlt size={26}/>
            {formattedStart}
        </Info>
        <Info>
            <FaClock />
            {duration}
        </Info>
        <Chip eventType={type}>{type}</Chip>
        </Card>
    );
};



Event.propTypes={
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
};