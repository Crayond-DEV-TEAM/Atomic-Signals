import React from 'react'
import PropTypes from "prop-types";
import { AutoSuggest, AvthorProfile, ProfileLable, SelectBoxChild, SelectBoxContainer, SuggestInput, SuggestInutLable } from './style';
import Box from '@mui/system/Box';
import DownArrow from '../../assets/autoSuggestDownArrow';
import ClosedIconMulti from '../../assets/closedIcon';


export const AutoSuggestTypeA = ({ suggestType, error, disabled, lable = "Lable name", handleClosed = () => false }) => {

    const [val, setVal] = React.useState([])

    const handleChange = (newValue) => {
        setVal([...val, newValue[0]])
    }

    React.useEffect(() => {
    }, [val])
    return (
        <>
            <Box>
                <SuggestInutLable >{lable}</SuggestInutLable>

                <AutoSuggest
                    multiple={suggestType === "typeC" ? true : false}
                    forcePopupIcon={suggestType === "typeC" ? true : false}
                    popupIcon={<DownArrow />}
                    onChange={(event, newValue) => {
                        handleChange(newValue)
                    }}
                    value={suggestType === "typeC" ? [] : ""}
                    options={top100Films}
                    suggestType={suggestType}
                    noOptionsText={'text - Add'}
                    renderInput={(params) =>
                        <SuggestInput
                            {...params}
                            placeholder="CEO, Manager, etc"
                            size="small"
                            sx={{ bgcolor: disabled ? "#F5F5F5" : "" }}
                            helperText={error ? "Error text" : ""}
                            error={error}
                        />
                    }
                />
                {
                    suggestType === "typeC" ?
                        <SelectBoxContainer>
                            {
                                val?.map((item) => {
                                    return (
                                        <SelectBoxChild xs={4} mt={1} mr={1}>
                                            <AvthorProfile alt="Remy Sharp" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sigourney-weaver-avatar-ii-the-way-of-water-1670323174.jpg?crop=1.00xw:0.951xh;0,0.0494xh&resize=1200:*" />

                                            <ProfileLable>{item?.label}</ProfileLable>
                                            <Box onClick={() => handleClosed()} sx={{ cursor: "pointer" }}>
                                                <ClosedIconMulti />
                                            </Box>
                                        </SelectBoxChild>
                                    )
                                })
                            }

                        </SelectBoxContainer>
                        : ""
                }
            </Box>
        </>
    )
}

AutoSuggestTypeA.prototype = {


    suggestType: PropTypes.oneOf(["typeA", "typeB", "typeC"]),

    label: PropTypes.string,

    disabled: PropTypes.bool,

    error: PropTypes.bool,

}

const top100Films = [
    { label: ' Shawshank', id: 1994 },
    { label: ' Godfar', id: 1972 },
    { label: ' GodfarI', id: 1974 },
    { label: ' Knight', id: 2008 },
    { label: 'Angry Men', id: 1957 }
];