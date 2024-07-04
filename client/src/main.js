export async function fetchData(route = '', data = {}, methodType = 'GET') {
    const url = `http://localhost:5000${route}`;
    
    const options = {
      method: methodType,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    if (methodType !== 'GET') {
      options.body = JSON.stringify(data);
    }
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error(`Fetch error for ${route}:`, error);
      throw new Error('An error occurred during the request.');
    }
  }
  