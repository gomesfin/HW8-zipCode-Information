document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-info');
    const zipcodeInput = document.getElementById('zipcode');
    const cityElement = document.getElementById('city');
    const countyElement = document.getElementById('county');
    const populationElement = document.getElementById('population');
    const errorElement = document.getElementById('error');
  
    const fetchInfo = async () => {
      const zipcode = zipcodeInput.value.trim();
      if (!zipcode) {
        errorElement.textContent = 'Please enter a ZIP code.';
        return;
      }
      
      errorElement.textContent = '';
      cityElement.textContent = '';
      countyElement.textContent = '';
      populationElement.textContent = '';
  
      try {
        // Replace with the actual API URL you plan to use
        const response = await axios.get(`https://api.zippopotam.us/us/${zipcode}`);
        
        // Extract data from API response
        const { places } = response.data;
        const place = places[0];
        cityElement.textContent = `City: ${place['place name']}`;
        countyElement.textContent = `County: ${place['state abbreviation']}`;
        // For population, you might need a different API or additional data
        populationElement.textContent = `Population: Data not available in this API`;
  
      } catch (error) {
        errorElement.textContent = 'Error fetching information. Please check the ZIP code and try again.';
      }
    };
  
    fetchButton.addEventListener('click', fetchInfo);
  });
  