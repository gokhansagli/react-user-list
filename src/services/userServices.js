export async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Sunucu Hatası...");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
