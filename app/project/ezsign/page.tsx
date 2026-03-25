"use client"

import { useEffect, useState } from "react"
import Zh from "./zh.mdx"
import En from "./en.mdx"

export default function Page() {

  const [lang, setLang] = useState<"en" | "zh">("zh")

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "en" | "zh" | null

    if (savedLang) {
      setLang(savedLang)
    }

    const handleChange = () => {
      const newLang = localStorage.getItem("lang") as "en" | "zh"
      setLang(newLang)
    }

    window.addEventListener("languageChange", handleChange)

    return () => {
      window.removeEventListener("languageChange", handleChange)
    }

  }, [])

  if (lang === "en") {
    return <En />
  }

  return <Zh />
}