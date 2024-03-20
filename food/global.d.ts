type FoodCatalog = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

type CategoryType = {
  label: "";
};

type Categories = {
  name: string;
  id: string;
  _id: string;
  foodId: CategoryType[];
};
