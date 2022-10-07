import * as React from "react";
import Container from "@mui/material/Container";
// import Image from "next/image";
// import Link from "@/src/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Footer = () => {
    <Paper sx={{
        marginTop: 'calc(10% + 60px)',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }} component="footer" square variant="outlined">
        <Container maxWidth="lg">
            <Box
                sx={{
                    flexGrow: 1,
                    justifyContent: "center",
                    display: "flex",
                    my: 1
                }}
            >
                {/* <div>
                    <Image priority src="../../../public/Guaradict.png" width={75} height={30} alt="Logo" />
                </div> */}
            </Box>

            <Box
                sx={{
                    flexGrow: 1,
                    justifyContent: "center",
                    display: "flex",
                    mb: 2,
                }}
            >
                <Typography variant="caption" color="initial">
                    Copyright ©2022. [] Limited
                </Typography>
            </Box>
        </Container>
    </Paper>
}

export default Footer