import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaMapMarkerAlt, FaUserAlt, } from "react-icons/fa";
import { formatEventStart } from "utils/formatEventStart";
import { formatEventDuration } from "utils/formatEventsDuration";

import PropTypes from 'prop-types';
import css from './Event.module.css';



export const Event = ({ name, location, speaker, type, start, end}) => {
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end)
    return (
        <div className={css.event}>
        <h2 className={css.title}>{name}</h2>
        <p className={css.info}>
            <FaMapMarkerAlt />
            {location}
        </p>
        <p className={css.info}>
            <FaUserAlt className={css.icon} size={26} />
            {speaker}
        </p>
        <p className={css.info}>
            <FaCalendarAlt />
            {formattedStart}
        </p>
        <p className={css.info}>
            <FaClock />
            {duration}
        </p>
        <span className={css.chip}>{type}</span>
        </div>
    );
};



Event.propTypes={
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
};