export default async function greetingsFromApi() {
    const endpoint = '/api/greetings';
    const response = await fetch(endpoint);
    if (response.status !== 200) {
      throw new Error('Can not fetch the greetings from given API');
    }
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Can not get any greetings');
    }
  }