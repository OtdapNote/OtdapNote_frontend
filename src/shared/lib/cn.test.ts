import { describe, expect, it } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
  it('글자 크기와 글자 색을 둘 다 남긴다', () => {
    expect(cn('text-title-l', 'text-ink-primary')).toBe('text-title-l text-ink-primary')
  })

  it('같은 종류의 클래스는 뒤의 것으로 덮는다', () => {
    expect(cn('text-body-m', 'text-title-s')).toBe('text-title-s')
    expect(cn('p-16', 'p-24')).toBe('p-24')
    expect(cn('shadow-raised-1', 'shadow-raised-2')).toBe('shadow-raised-2')
  })

  it('조건이 거짓인 클래스는 뺀다', () => {
    const isActive = false
    expect(cn('p-16', isActive && 'shadow-inset-1', undefined)).toBe('p-16')
  })
})