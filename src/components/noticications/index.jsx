import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { DeleteIcon } from '../../assets/deleteIcon';
import { NotificationIconSvg } from '../../assets/notificationIocn';

import { notification_card_style } from './style';

export function NotificationCard(props) {
    const {
        className = '',
        rootStyle = {},
        prescription = '',
        notificationTime = '',
        url = '',
        redirectFnc,
        data = {},
        is_read = false,
        ...rest
    } = props;

    return (
        <Box
            sx={{
                ...notification_card_style.rootSx,
                ...rootStyle,
                backgroundColor: '#FFFFFF',
                boxShadow: is_read === false ? '' : '0px 1px #dfe2e3',
            }}
            className={`${className}`}
            {...rest}
        >
            <Box sx={notification_card_style.boxSX}>
                    <Box sx={notification_card_style.iconBackgroundSx}>
                        
                    <NotificationIconSvg/>
                        
                    </Box>
                <Box sx={{ cursor: 'pointer' }}
                    onClick={() => redirectFnc(url, data)}
                >
                    <Box sx={notification_card_style.boxinSX}>
                    <Typography
                        variant="caption"
                        color="text.disabled"
                    >
                        {notificationTime}

                    </Typography>
                    <Box sx={{opacity:"0","&:hover":{opacity:'1'}}}>
                        <DeleteIcon/>
                    </Box>
                    </Box>
                    <Typography
                        variant="body2"
                        style={{ fontWeight: is_read === false ? '600' : '100' }}
                    >
                        {prescription}
                    </Typography>

                </Box>
            </Box>
        </Box>
    );
}

NotificationCard.propTypes = {
    className: PropTypes.string,
    rootStyle: PropTypes.object,
    prescription: PropTypes.string,
    notificationTime: PropTypes.string,
};