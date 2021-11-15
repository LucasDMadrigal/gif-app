const apiKey = "J5jISu8fP51cX9TJ9r248RNfjcRHq20X";
// const limite = 6;

export const getGif = async (category, limite) => {
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${category}&limit=${limite}&api_key=${apiKey}`
  );
  const { data } = await resp.json();

  return data
};
