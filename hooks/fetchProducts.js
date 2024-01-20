const fetchProducts = async (setData, setLoading, setError) => {
  try {
    const response = await fetch(
      "https://5fc9346b2af77700165ae514.mockapi.io/products"
    );
    const products = await response.json();

    await setData(products);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

export default fetchProducts;
