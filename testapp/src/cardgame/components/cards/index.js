import React from "react";
import { Button, CardContent, Grid2, Card as MuiCard } from "@mui/material";

const Card = ({onClick,cards,match,moves,onClickRestart}) => {

  return (
    <Grid2 container xs={12} md={12} sm={12} spacing={1} style={{width:"42rem"}}>
       
      {cards?.map((data) => (
        <Grid2  sx={{minWidth:"10rem"}}item xs={3} md={3} sm={3} id={data.id} onClick={()=>onClick(data)}>
          <MuiCard style={{transition:data.isFlip?"transform 0.6s ease-in-out":"none"}} >
            <CardContent>{data.isFlip?data.flipColor:"Memmory Game"}</CardContent>
          </MuiCard>
        </Grid2>
      ))}
      
    </Grid2>
  );
};

export default Card;
