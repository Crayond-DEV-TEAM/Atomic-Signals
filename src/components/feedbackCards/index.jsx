import React from "react";
import PropTypes from "prop-types";
import { AvatarComponent, BottomButton, CardBox, CenterAlignBox, CollapsedSubTitle, CollapsedTitle, ExpandBox, LineRowBox, ProfileBox, ProfileChildBox, ResponseBox, ResponseButtonLable, ResponseCollapsedBox, ResponseDateTime, ResponseName, ResponseSubTitle, ResponseTitle, SubmitResponseButton, SubmitResponseButtonLable, ViewButton } from "./styles";
import { Box, Typography } from "@mui/material";
import ThumbIcon from "../../assets/thumbIcon";
import DoubleTick from "../../assets/doubleTick";
import { width } from "@mui/system";

export const FeedbackCards = ({ view, showCollapsed, handleSubmitResponse = () => false, handleView = () => false, handleCollaped = () => false }) => {

    // const [showCollapsed, setCollapsed] = React.useState(false);
    // const [view, setView] = React.useState(false);

    // const handleSubmitResponse = () => {
    //     setCollapsed(true)
    // }

    // const handleView = () => {
    //     setView(true)
    // }

    // const handleCollaped = () => {
    //     setView(false)
    // }

    return (
        <React.Fragment>
            <CardBox>

                <ResponseBox >
                    <ProfileBox>
                        <ProfileChildBox >
                            <AvatarComponent alt="Avatar" src="https://variety.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-02-at-8.33.52-AM.png?w=681&h=383&crop=1" />
                            <Box ml={1}>
                                <ResponseName>Henry</ResponseName>
                                <ResponseDateTime>31 Jan 2023, 01:31 PM</ResponseDateTime>
                            </Box>
                        </ProfileChildBox>

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          
                          
                            <Box sx={{ display: 'flex', justifyContent: "center", alignItems:"center", transition: "transform 550ms", ":hover": { "&.MuiBox-root .MuiTypography-root": { display: "block" }, transform: "translateX(-20px)", backgroundColor: "#F5F5F5", borderRadius: "50px", height: "25px" ,paddingRight:"90px"} }}>

                                <Box  ml={.2} mr={.3} sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "22px", width: "22px", borderRadius: "50px", backgroundColor: "#007C32" }}>
                                    <Typography color={"#ffff"} fontWeight={"600"} fontSize={"14px"}>H</Typography>
                                </Box>
                                <Box mr={"0px"} >
                                    <Typography zIndex={-1} fontSize={"12px"}>I like You</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "22px", borderRadius: "50px",paddingLeft:"15px", backgroundColor:"#F5F5F5"}}>

                            <Typography mr={.5} fontSize={"12px"}>very good</Typography>

                            </Box>

                        </Box>
                    </ProfileBox>

                    <Box mt={1} minHeight={view === true ? "0px" : "70px"} mb={1}>
                        <ResponseTitle >Feedback reason will be displayed here</ResponseTitle>
                        <ResponseSubTitle >Your way of presenting the topic was very good in the client meeting</ResponseSubTitle>
                    </Box>
                    {
                        view ?
                            <Box minHeight={view == true ? "0px" : "100px"} borderTop="1px dashed #E6E6E6E6">
                                <ExpandBox>
                                    <LineRowBox >
                                        <Box mr={1}>
                                            <DoubleTick />
                                        </Box>
                                        <CollapsedTitle >Response submitted</CollapsedTitle>
                                        <CollapsedSubTitle >31 Jan 2023, 01:30 PM</CollapsedSubTitle>
                                    </LineRowBox>
                                    <Box sx={{ cursor: "pointer" }} onClick={() => handleCollaped()}>
                                        <ResponseButtonLable >Collapse</ResponseButtonLable>
                                    </Box>
                                </ExpandBox>

                                <LineRowBox >
                                    <ResponseTitle >Thanks! I'll try to improve further</ResponseTitle>
                                    <Box ml={1} sx={{ alignItems: "center" }}>
                                        <ThumbIcon />
                                    </Box>
                                </LineRowBox>
                                <ResponseSubTitle >Happy to hear it from you.</ResponseSubTitle>
                            </Box>
                            : ""
                    }
                </ResponseBox>
                {
                    view === false ?
                        <BottomButton onClick={() => handleSubmitResponse()}>
                            {
                                showCollapsed ?
                                    <ResponseCollapsedBox >
                                        <CenterAlignBox >
                                            <Box mr={1}>
                                                <DoubleTick />
                                            </Box>
                                            <ResponseButtonLable>Response submitted</ResponseButtonLable>
                                        </CenterAlignBox>
                                        <Box onClick={() => handleView()}>
                                            <ResponseButtonLable >View</ResponseButtonLable>
                                        </Box>
                                    </ResponseCollapsedBox> :
                                    <SubmitResponseButton onClick={() => handleSubmitResponse()}>
                                        <SubmitResponseButtonLable  >Submit your response</SubmitResponseButtonLable>
                                    </SubmitResponseButton>
                            }
                        </BottomButton> : ""
                }
            </CardBox>
        </React.Fragment>
    )
}

FeedbackCards.propTypes = {

    view: PropTypes.bool,

    showCollapsed: PropTypes.bool,

    handleView: PropTypes.func,

    handleCollaped: PropTypes.func,

    handleSubmitResponse: PropTypes.func,
};  