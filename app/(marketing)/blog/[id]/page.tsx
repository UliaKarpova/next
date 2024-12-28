export default async function MarketingBlog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <h1>MarketingBlog {id}</h1>;
}
