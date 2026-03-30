export async function getPing() {
  const response = await fetch('http://127.0.0.1:5000/api/ping')
  const data = await response.json()

  return data
}