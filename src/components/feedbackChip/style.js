import { Avatar,
    Box, styled, Typography } from '@mui/material';

export const StyledAvatar = styled(Avatar)(() => ({
    background: "#007C32",
    height: "20px",
    width: "20px",
    fontSize: "12px",
    '&.MuiChip-avatarColorDefault': { color: "#fff" }

}))

export const StyledBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: "16px"
}))

export const MainBox = styled(Box)(() => ({
    backgroundColor: "#F5F5F5",
    borderRadius: "16px",
    padding: "5px",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center"
    ,
    transition: "transform 550ms",
    ":hover": { "& .MuiBox-root": { display: "block" },
    transform: "translateX(-60px)" }
}))

export const AvatarBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    height: "20px",
    width: "20px",
    borderRadius: "50px",
    backgroundColor: "green"
}))

export const FeedackBox = styled(Box)(() => ({
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: "16px",
    display: "none"
}))

export const TextContent = styled(Typography)(() => ({
     marginLeft:"6px",
     alignSelf:"center",
     fontSize:"12px",
     opacity: "0.2",
     backgroundColor: "#F5F5F5",
     ":hover": { opacity: "1",
     display: "block" } 
}))

export const TextLabel = styled(Typography)(() => ({
    position: "relative",
    fontSize:"12px",
    marginRight:"8px"
}))