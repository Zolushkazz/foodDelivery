// "use client";

// import { Button, Grid, Stack } from "@mui/material";
// import axios from "axios";

// export const GetFoodCategory = async () => {
//   const getOneCategory = "http://localhost:8000/category";

//   const response = await axios.get<Categories[]>(getOneCategory);
//   console.log(response.data);

//   return (
//     <Stack>
//       <Grid container spacing={2}>
//         {data?.map(({ name }, index) => {
//           return (
//             <Grid key={index}>
//               <Button sx={{ color: "lightgray" }}> {name} </Button>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Stack>
//   );
// };
