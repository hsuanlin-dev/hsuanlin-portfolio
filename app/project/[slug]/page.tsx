import ProjectLangClient from "./ProjectLangClient"
import { PROJECTS } from "@/app/data"

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.link.replace("/project/", ""),
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <ProjectLangClient slug={slug} />
}
