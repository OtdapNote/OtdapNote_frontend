import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// 우리 글자 크기 이름을 알려줘야 text-title-l(크기)과 text-ink-primary(색)를 구분한다
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        'display',
        'title-l',
        'title-m',
        'title-s',
        'body-l',
        'body-m',
        'body-s',
        'label-l',
        'label-m',
        'label-s',
        'caption',
        'micro',
        'grade-xl',
        'grade-m',
        'number',
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}