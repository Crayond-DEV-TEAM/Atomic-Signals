import { Box, styled } from '@mui/material';


export const CardStyle = styled(Box)(() => ({
    py: 2.1,
    px: 2.5,
    m: 1.2,
    borderRadius: '4px',
    
}))


export const StyleBox = styled(Box)(() => ({
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "8px"
}))

export const NotificationImg = styled(Box)(() => ({
    background: "#EFEEFB 0% 0% no-repeat padding-box",
    borderRadius: "4px",
    opacity: 1,
    padding:"4px 4px 0 4px"
}))

export const ContentStyle = styled(Box)(() => ({
    display: "flex",
    justifyContent: "flex-start",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap"

}))
