import {IconButton, Stack, Typography} from "@mui/material";
import {ArrowBackIosNew} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

export declare interface NavBarProps {
    text?: string;
    navigateTo: string;
}

function NavigationBar({text, navigateTo}: NavBarProps) {
    const navigate = useNavigate();

    return (
        <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            borderBottom="1px solid"
            borderColor={"#1876d3"}
            position="relative"
            sx={{backgroundColor: "white"}}
        >
            <IconButton
                aria-label="back"
                size="large"
                onClick={() => navigate(navigateTo)}
                sx={{ position: "absolute", left: 0, zIndex: 1 }}
            >
                <ArrowBackIosNew color="primary"/>
            </IconButton>
            <Typography
                width="100%"
                fontSize="26px"
                fontWeight="bold"
                letterSpacing="0.4em"
                color={"#1876d3"}
                textAlign="center"
            >
                {text}
            </Typography>
        </Stack>
    );
}

export default NavigationBar;

/*
import {Box, IconButton, Stack, Typography} from "@mui/material";
import {ArrowBackIosNew} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

export declare interface NavBarProps {
    text?: string;
    navigateTo: string;
}

function NavigationBar({text, navigateTo}: NavBarProps) {
    const navigate = useNavigate();

    return (
        <Stack
            direction="row"
            spacing={2}
            justifyContent="start"
            borderBottom="1px solid"
            borderColor={"#1876d3"}
            sx={{backgroundColor: "white"}}
        >
            <IconButton
                aria-label="back"
                size="large"
                onClick={() => navigate(navigateTo)}
            >
                <ArrowBackIosNew color="primary"/>
            </IconButton>
            <Box
                width={"100%"}
                justifyContent="center"
                alignContent="center"
            >
                <Typography width={"100%"} fontSize={"26px"} fontWeight="bold" letterSpacing="0.4em" color={"#1876d3"}
                            alignSelf="center">{text}</Typography>
            </Box>
        </Stack>
    );
}

export default NavigationBar;*/