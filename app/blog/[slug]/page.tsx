import LangClient from "./LangClient"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return <LangClient slug={slug} />
}