export async function POST(req) {
  const data = await req.json();

  console.log("New lead:", data);

  return Response.json({
    success: true,
  });
}