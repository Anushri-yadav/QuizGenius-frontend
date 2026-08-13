const API_URL = `${import.meta.env.VITE_API_URL}/api`;

export async function testBackend() {
  const response = await fetch(
    `${API_URL}/quiz/test`
  );

  if (!response.ok) {
    throw new Error("Backend request failed");
  }

  return response.text();
}