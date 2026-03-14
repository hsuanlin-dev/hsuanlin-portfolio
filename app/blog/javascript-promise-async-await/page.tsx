"use client" 
// 讓這個 component 在 client 端執行，因為我們需要使用 localStorage

import { useEffect, useState } from "react"
import Zh from "./zh.mdx"
import En from "./en.mdx"

export default function Page() {

  // 建立一個 state 來存目前語言
  // 預設先設為 "zh"
  const [lang, setLang] = useState<"en" | "zh">("zh")

  useEffect(() => {

    // 從 localStorage 讀取使用者之前選擇的語言
    const savedLang = localStorage.getItem("lang") as "en" | "zh" | null

    // 如果 localStorage 有存語言，就更新 state
    if (savedLang) {
      setLang(savedLang)
    }

    // 建立一個 function 監聽語言變化
    const handleChange = () => {
      const newLang = localStorage.getItem("lang") as "en" | "zh"
      setLang(newLang)
    }

    // 監聽 footer LanguageSwitch dispatch 的事件
    window.addEventListener("languageChange", handleChange)

    // component unmount 時移除監聽，避免 memory leak
    return () => {
      window.removeEventListener("languageChange", handleChange)
    }

  }, [])

  // 如果語言是英文，顯示英文文章
  if (lang === "en") {
    return <En />
  }

  // 否則顯示中文文章
  return <Zh />
}