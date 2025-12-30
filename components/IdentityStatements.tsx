'use client'

import { cn } from '@/lib/utils'

interface IdentityStatementsProps {
  statements: string[]
  className?: string
}

export function IdentityStatements({ statements, className }: IdentityStatementsProps) {
  if (statements.length === 0) return null

  return (
    <div className={cn("flex flex-col gap-2 pt-2", className)}>
      {statements.map((statement, idx) => (
        <p
          key={idx}
          className="text-sm sm:text-base text-foreground/90 font-light leading-relaxed pl-3 border-l-2 border-primary/30"
        >
          {statement}
        </p>
      ))}
    </div>
  )
}
