import PropTypes from 'prop-types';
import { Title } from 'components/App/PageTitle.styled';


const PageTitle = ({text}) => {
    return <Title>{text}</Title>;
};

export default PageTitle;

PageTitle.propTypes={
    text: PropTypes.string.isRequired,
};