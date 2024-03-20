import { Button, Grid, Stack } from "@mui/material";
import axios from "axios";
import { MouseEvent, useState } from "react";



export const AllCategories = async () => {
  const getAllCategories = "http://localhost:8000/categories";

  const { data } = await axios.get<Categories[]>(getAllCategories);

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) =>{\
    const [sortFoods, setSortFoods] = useState<Categories>({
     _id:"",
      id: "",
      name: "",
      foodId: []
      
    })
    try{
      const {id} = event.currentTarget

      const {data } = await axios.post<Categories[]>(   "http://localhost:8000/category",
      { id })

      // setSortFoods(data)
    }catch(err:any){
    console.log(err.message);
    
  }
  }

  return (
    <Stack width={"100%"}>
      <Grid container spacing={2}>
        {data?.map(({ name }, index) => {
          return (
            <Grid
              key={index}
              sx={{
                width: "20%",
                border: "1px solid",
                gap: "20px",
                display: "flex",
                borderRadius: "10px",
              }}
            >
              <Button onClick={handleClick} sx={{ color: "black" }}> {name} </Button>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};
