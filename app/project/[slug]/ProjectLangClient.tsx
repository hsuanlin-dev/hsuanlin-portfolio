"use client"

import { useEffect, useState } from "react"

export default function ProjectLangClient({ slug }: { slug: string }) {

  const [lang, setLang] = useState<"en" | "zh">(() => {
    if (typeof window === "undefined") return "zh"
    return (localStorage.getItem("lang") as "en" | "zh") || "zh"
  })

  const [Post, setPost] = useState<any>(null)

  useEffect(() => {

    const handleChange = () => {
      const newLang = localStorage.getItem("lang") as "en" | "zh"
      if (newLang) setLang(newLang)
    }

    window.addEventListener("languageChange", handleChange)

    return () => {
      window.removeEventListener("languageChange", handleChange)
    }

  }, [])

  useEffect(() => {

    async function loadPost() {
      const module = await import(`../${slug}/${lang}.mdx`)
      setPost(() => module.default)
    }

    loadPost()

  }, [slug, lang])

  if (!Post) return null

  return <Post />
}
