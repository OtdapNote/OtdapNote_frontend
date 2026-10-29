import { useEffect, useId, useRef, type ReactNode } from 'react'
import { CircleCheck, TriangleAlert } from 'lucide-react'
import { cn } from '../../lib'
import { dimBackdrop } from '../dim'

type DialogType = 'confirm' | 'danger'

type DialogProps = {
  open: boolean
  onClose: () => void
  type?: DialogType
  title: string
  description: string
  // 버튼은 Button(B)·DangerButton을 쓰는 화면에서 넣는다
  actions: ReactNode
}

const ICONS = {
  confirm: <CircleCheck aria-hidden className="size-24 text-accent-default" />,
  danger: <TriangleAlert aria-hidden className="size-24 text-text-danger" />,
} satisfies Record<DialogType, ReactNode>

export function Dialog({ open, onClose, type = 'confirm', title, description, actions }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const descriptionId = useId()

  // open 값에 맞춰 네이티브 dialog를 열고 닫는다 (모달로 열어야 포커스 가두기·::backdrop이 동작)
  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      // ESC: 브라우저가 바로 닫지 않게 막고, 닫을지는 부모가 open으로 정한다
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      className={cn(
        'm-0 size-full max-h-none max-w-none bg-transparent p-16',
        'open:flex open:items-center open:justify-center',
        dimBackdrop,
      )}
    >
      <div className="flex w-full max-w-dialog flex-col gap-16 rounded-xl border border-paper-highlight bg-paper-raised p-28 shadow-raised-4">
        <div className="flex size-52 items-center justify-center rounded-full bg-paper-well shadow-inset-1">
          {ICONS[type]}
        </div>
        <h2 id={titleId} className="text-title-m text-ink-primary">
          {title}
        </h2>
        <p id={descriptionId} className="text-body-m text-ink-secondary">
          {description}
        </p>
        <div className="flex gap-12 *:flex-1">{actions}</div>
      </div>
    </dialog>
  )
}