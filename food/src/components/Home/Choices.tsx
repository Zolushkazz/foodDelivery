import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import SoupKitchenRoundedIcon from "@mui/icons-material/SoupKitchenRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import { Box, Stack, Typography } from "@mui/material";

export const ChoicesCategory = () => {
  const data = [
    {
      icon: (
        <ImportContactsRoundedIcon style={{ width: "40px", height: "40px" }} />
      ),
      title: " Хүргэлтийн төлөв хянах",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <AccessTimeRoundedIcon style={{ width: "40px", height: "40px" }} />,
      title: "Шуурхай хүргэлт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: (
        <SoupKitchenRoundedIcon style={{ width: "40px", height: "40px" }} />
      ),
      title: "Эрүүл, баталгаат орц",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <MenuBookRoundedIcon style={{ width: "40px", height: "40px" }} />,
      title: "Хоолны өргөн сонголт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginX: "10%",
        marginY: "10%",
      }}
    >
      {data.map(({ icon, title, text }, index) => {
        return (
          <Stack key={index} sx={{ display: "flex" }}>
            <Stack
              sx={{
                width: "330px",
                height: "155px",
                border: "1px solid lightGray",
                boxShadow: 3,
                borderRadius: "8px",
                paddingX: "30px",
                paddingY: "30px",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  color: "#18BA51",
                  width: "50px",
                  height: "100px",
                }}
              >
                {icon}
              </Box>
              <Stack>
                <Typography sx={{ fontSize: "25px" }}>{title}</Typography>
                <Typography sx={{ fontSize: "18px", color: "#272727" }}>
                  {text}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Box>
  );
};
