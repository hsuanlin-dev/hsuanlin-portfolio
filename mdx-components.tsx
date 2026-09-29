import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure className="my-8">
          <img src={src} alt={alt} className="rounded-xl w-full" />
          {caption && (
            <figcaption className="text-center mt-2 text-sm text-zinc-500">
              {caption}
            </figcaption>
          )}
        </figure>
      )
    },
    // 優化後的 code 組件
    code: ({ children, className, ...props }: ComponentPropsWithoutRef<'code'>) => {
      // 確保 children 是字串，如果不是則轉為字串或回傳原始內容
      const codeContent = typeof children === 'string'
        ? children
        : Array.isArray(children)
          ? children.join('')
          : '';

      // 只有「標了語言的程式碼區塊」(例如 ```js) 才會有 language-xxx 這個 className。
      // 純文字的 fenced block（例如 ASCII 圖表，開頭只有 ``` 沒有語言）跟行內程式碼
      // (`foo`) 都不會有這個 className，這裡用它來判斷該不該套用語法高亮——
      // 避免把純文字圖表或行內片語誤判成 JS 而上色。
      const NON_CODE_LANGUAGES = new Set([
        'language-text',
        'language-plaintext',
        'language-txt',
        'language-plain',
      ])
      const isHighlightable =
        typeof className === 'string' &&
        className.startsWith('language-') &&
        !NON_CODE_LANGUAGES.has(className)

      if (codeContent && isHighlightable) {
        const codeHTML = highlight(codeContent)
        return <code className={className} dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
      }

      return <code className={className} {...props}>{children}</code>
    },
  }
}