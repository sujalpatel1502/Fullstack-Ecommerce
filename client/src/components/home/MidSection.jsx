import { Grid,styled } from "@mui/material"
import { imageURL } from "../constants/data";
// grid for responsive layout
const MidSection=()=>{
    return(
        <Grid style={{marginTop:"20px", justifyContent:"space-between"}} lg={12} sm={12} md={12} xs={12} container>
                {
                    imageURL.map((image)=>{
                        return(
                            <Grid item lg={4} md={4} sm={12} xs={12}>
                        <img src={image} alt="image" style={{width:"100%"}}/>
                        </Grid>
                        )
                    })
                }
        </Grid>
    )
}

export default MidSection;