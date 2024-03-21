import { SearchFood } from "@/components/SearchFood/Search";
import { Stack } from "@mui/material";
import axios from "axios";

type SearchPageProps = {
  searchParams: {
    id: string | undefined;
  };
};

const searchFoods = async (id?: string) => {
  const body = {
    filter: {
      $or: [
        {
          name: {
            $regex: id,
            $options: "i",
          },
        },
        {
          price: {
            $regex: id,
          },
        },
      ],
    },
  };

  const { data } = await axios.post<FoodCatalog[]>(
    "http://localhost:8000/get/foods",
    { filter: body.filter }
  );

  return data;
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const foodName = searchParams.id || "";

  const data = await searchFoods(foodName);

  return (
    <Stack sx={{ pl: "8%" }}>
      <SearchFood data={data} />
    </Stack>
  );
};

export default SearchPage;
