import Homepage from "@/components/homepage";

export default async function Home() {
  const productTypes = [
    { title: "Smartphones", category: "smartphones" },
    { title: "Laptops", category: "laptops" },
  ];

  const fetchProductWidgets = async () => {
    const widgets = await Promise.all(
      productTypes.map(async ({ title, category }) => {
        const res = await fetch(
          `https://dummyjson.com/products/category/${category}?limit=5&skip=0`,
        );
        const data = await res.json();

        return {
          title,
          category,
          products: data.products,
        };
      }),
    );

    return widgets;
  };

  const widgetList = await fetchProductWidgets();

  return <Homepage widgetList={widgetList} />;
}
