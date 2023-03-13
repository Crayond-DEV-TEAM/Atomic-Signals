import React from "react";
import PropTypes from "prop-types";
import { AvatarComponent, BottomButton, CardBox, CenterAlignBox, CollapsedSubTitle, CollapsedTitle, ExpandBox, LineRowBox, ProfileBox, ProfileChildBox, ResponseBox, ResponseButtonLable, ResponseCollapsedBox, ResponseDateTime, ResponseName, ResponseSubTitle, ResponseTitle, SubmitResponseButton, SubmitResponseButtonLable, ViewButton } from "./styles";
import { Box, Typography } from "@mui/material";
import ThumbIcon from "../../assets/thumbIcon";
import DoubleTick from "../../assets/doubleTick";

const cardText ={
    Name:"Steven",
    Date:"31 Jan 2023, 01:31 PM",
    titt1:"Feedback reason will be displayed here",
    titt2:"Your way of presenting the topic was very good in the client meeting",
    profileText1:"Response submitted",
    profileText2:"Collapse",
    profileText3:"Thanks! I'll try to improve further",
    profileText4:"Happy to hear it from you.",
    btnTit:"Submit your response",
    btnTit2:"View",
    btnText3:'Submit your response'
}
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
                                <ResponseName>{cardText.Name}</ResponseName>
                                <ResponseDateTime>{cardText.Date}</ResponseDateTime>
                            </Box>
                        </ProfileChildBox>

                      {/* here chips componenets */}
                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", height: "22px", borderRadius: "50px", backgroundColor: "#F5F5F5" }}>

                            <Box ml={.2} mr={.3} sx={{ ":hover": { transform: "translateX(-20px)" }, transition: "transform 550ms", display: 'flex', justifyContent: "center", alignItems: "center", height: "20px", width: "20px", borderRadius: "50px", backgroundColor: "#007C32" }}>
                                <Typography color={"#ffff"} fontWeight={"600"} fontSize={"14px"}>H</Typography>
                            </Box>

                            <Typography mr={.5} fontSize={"12px"}>very good</Typography>
                        </Box>


                    </ProfileBox>

                    <Box mt={1} minHeight={view === true ? "0px" : "70px"} mb={1}>
                        <ResponseTitle >{cardText.titt1}</ResponseTitle>
                        <ResponseSubTitle >{cardText.titt2}</ResponseSubTitle>
                    </Box>
                    {
                        view ?
                            <Box minHeight={view == true ? "0px" : "100px"} borderTop="1px dashed #E6E6E6E6">
                                <ExpandBox>
                                    <LineRowBox >
                                        <Box mr={1}>
                                            <DoubleTick />
                                        </Box>
                                        <CollapsedTitle ></CollapsedTitle>
                                        <CollapsedSubTitle >{cardText.Date}</CollapsedSubTitle>
                                    </LineRowBox>
                                    <Box sx={{ cursor: "pointer" }} onClick={() => handleCollaped()}>
                                        <ResponseButtonLable >{cardText.profileText2}</ResponseButtonLable>
                                    </Box>
                                </ExpandBox>

                                <LineRowBox >
                                    <ResponseTitle >{cardText.profileText3}</ResponseTitle>
                                    <Box ml={1} sx={{ alignItems: "center" }}>
                                        <ThumbIcon />
                                    </Box>
                                </LineRowBox>
                                <ResponseSubTitle >{cardText.profileText4}</ResponseSubTitle>
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
                                            <ResponseButtonLable>{cardText.btnTit}</ResponseButtonLable>
                                        </CenterAlignBox>
                                        <Box onClick={() => handleView()}>
                                            <ResponseButtonLable >{cardText.btnText3}</ResponseButtonLable>
                                        </Box>
                                    </ResponseCollapsedBox> :
                                    <SubmitResponseButton onClick={() => handleSubmitResponse()}>
                                        <SubmitResponseButtonLable  >{cardText.btnText3}</SubmitResponseButtonLable>
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