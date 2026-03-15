"use client"

import { useEffect, useState } from "react"

export default function LangClient({ slug }: { slug: string }) {

  const [lang, setLang] = useState<"en" | "zh">("zh")
  const [Post, setPost] = useState<any>(null)

  useEffect(() => {

    const savedLang = localStorage.getItem("lang") as "en" | "zh" | null
    if (savedLang) setLang(savedLang)

    const handleChange = () => {
      const newLang = localStorage.getItem("lang") as "en" | "zh"
      setLang(newLang)
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