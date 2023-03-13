import { Avatar, Box, styled, Typography } from '@mui/material';


export const CardBox = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "567px",
    position: "relative",
    border: "1px solid #E6E6E6E6",
    borderRadius: "6px",
}))

export const ResponseBox = styled(Box)(({ theme }) => ({
    padding: "12px 12px"
}))

export const ProfileBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
}))

export const AvatarComponent = styled(Avatar)(({ theme }) => ({
    height: "32px",
    width: "32px"
}))

export const ProfileChildBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: "center",
    alignItems: "center"
}))

export const ResponseTitle = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    color: '#353448'

}))

export const ResponseSubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    color: '#9999A3'

}))

export const ResponseName = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    color: '#353448'
}))

export const ResponseDateTime = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    color: '#9999A3'
}))

export const SubmitLable = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    color: "#353448",
    marginRight: "8px"
}))

export const CenterAlignBox = styled(Box)(({ theme }) => ({
    display: "flex",
    direction: "row",
    alignItems: "center",
}))

export const ExpandBox = styled(Box)(({ theme }) => ({
    marginTop:"8px",
    display: "flex", 
    direction: "row", 
    justifyContent: "space-between"
}))

export const LineRowBox = styled(Box)(({ theme }) => ({
    display: "flex", 
    direction: "row",
    alignItems:"center"
}))

export const CollapsedTitle = styled(Box)(({ theme }) => ({
    marginRight:"8px", 
    fontSize:"12px",
    color:"#353448"
}))

export const CollapsedSubTitle = styled(Box)(({ theme }) => ({
    marginRight:"8px", 
    fontSize:"12px",
    color:"#71707E"
}))

export const BottomButton = styled(Box)(({ theme }) => ({
    backgroundColor: "#EEFBF6",
    position: "absolute",
    bottom: "0px",
    height: "32px",
    width: "100%",
    cursor: 'pointer',
    alignItems: "center",
    justifyContent: "center",
}))

export const ResponseCollapsedBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 10px",
    height: "32px",
}))

export const SubmitResponseButton = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "32px",
}))

export const ViewButton = styled(Typography)(({ theme }) => ({
    color: '#49C792',
    alignItems: "center",
    fontSize: "12px"
}))

export const ResponseButtonLable = styled(Typography)(({ theme }) => ({
    color: '#49C792',
    alignItems: "center",
    fontSize: "12px"
}))
export const SubmitResponseButtonLable = styled(Typography)(({ theme }) => ({
    color: '#49C792',
    alignItems: "center",
    fontSize: "14px"
}))