import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef, isValidElement } from 'react'
import { highlight } from 'sugar-high'
import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogImage,
} from '@/components/ui/morphing-dialog'

// 文章內嵌圖片：點擊可放大查看完整內容（適合文字較密的架構圖）
function ZoomableImage({ src, alt }: ComponentPropsWithoutRef<'img'>) {
  if (typeof src !== 'string') return null

  return (
    <MorphingDialog transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
      <MorphingDialogTrigger>
        <MorphingDialogImage
          src={src}
          alt={alt ?? ''}
          className="w-full cursor-zoom-in rounded-xl ring-1 ring-zinc-200/50 dark:ring-zinc-800/50"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative max-h-[90vh] max-w-[95vw] overflow-auto rounded-2xl bg-white p-2 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <MorphingDialogImage
            src={src}
            alt={alt ?? ''}
            className="max-h-[85vh] w-auto rounded-xl"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1 dark:bg-zinc-900"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: ZoomableImage,
    // Markdown 的 `![]()` 單獨成行時會被包進 <p>，但 ZoomableImage 內部用了 <div>，
    // <div> 不能是 <p> 的子節點（否則 hydration 錯誤），所以段落唯一子節點是圖片時要跳過 <p>。
    p: ({ children, ...props }: ComponentPropsWithoutRef<'p'>) => {
      const childArray = Array.isArray(children) ? children : [children]
      const isSingleImage =
        childArray.length === 1 &&
        isValidElement(childArray[0]) &&
        childArray[0].type === ZoomableImage

      if (isSingleImage) {
        return <>{children}</>
      }

      return <p {...props}>{children}</p>
    },
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