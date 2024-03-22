import { HomePage } from "@/components/Home/HomePage";

const getFoods = async () => {
  const url = "http://localhost:8000/get/foods";

  const response = await fetch(url, { method: "POST" });

  const data = (await response.json()) as FoodCatalog[];

  return data;
};

const Home = async () => {
  const allFoods = await getFoods();

  return <HomePage allFoods={allFoods} />;
};

export default Home;
