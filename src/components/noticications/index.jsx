import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { DeleteIcon } from '../../assets/deleteIcon';
import { NotificationIconSvg } from '../../assets/notificationIocn';
import { CardStyle, ContentStyle, NotificationImg, StyleBox } from './style';

export function NotificationCard(props) {
    const {
        className = '',
        prescription = '',
        notificationTime = '',
        ...rest
    } = props;

    return (
        <CardStyle {...rest}>
            <StyleBox>
                <NotificationImg>
                    <NotificationIconSvg />
                </NotificationImg>
                <Box>
                    <ContentStyle>
                        <Typography variant="caption" color="text.disabled">
                            {notificationTime}
                        </Typography>
                        <Box sx={{ display: "none", "&.MuiBox-root:hover": { display: 'block' } }}>
                            <DeleteIcon />
                        </Box>
                    </ContentStyle>
                    <Typography variant="body2">
                        {prescription}
                    </Typography>
                </Box>
            </StyleBox>
        </CardStyle>
    );
}

NotificationCard.propTypes = {
    className: PropTypes.string,
    rootStyle: PropTypes.object,
    prescription: PropTypes.string,
    notificationTime: PropTypes.string,
};

NotificationCard.defaultProps = {
    prescription: "New feedback from Srikrishna (Chief of Engineering)",
    notificationTime: "16 Feb 2023, 09:45 AM",
  };