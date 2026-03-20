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
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      // 確保 children 是字串，如果不是則轉為字串或回傳原始內容
      const codeContent = typeof children === 'string' 
        ? children 
        : Array.isArray(children) 
          ? children.join('') 
          : '';

      if (codeContent) {
        const codeHTML = highlight(codeContent)
        return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
      }
      
      return <code {...props}>{children}</code>
    },
  }
}