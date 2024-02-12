export const getData = async () => {
  const res = await fetch("https://localhost:3000/api/product", {
    cache: "no-store",
    next: {
      tags: ["products"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json;
};
