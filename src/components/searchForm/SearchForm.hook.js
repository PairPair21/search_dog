import axios from "axios";


const useSearchForm = async (watchFields) => {
  
  const {name,bark,energy,trainability,protectiveness,size} = watchFields;

  const options = {
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/dogs',
    params: {
      name: name || null,
      barking: bark || null,
      energy: energy || null,
      trainability: trainability ||  null,
      protectiveness: protectiveness || null,
      max_height: size || null
    },
    headers: {
      'X-API-Key': 'ncoM+zs5Dj7yTt9n7i6AGA==OCAq9Y5AjQSE3QXX',
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }

};

export default useSearchForm 