'use client'

import { cn } from '@/lib/utils'

interface IdentityStatementsProps {
  statements: string[]
  className?: string
}

export function IdentityStatements({ statements, className }: IdentityStatementsProps) {
  if (statements.length === 0) return null

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {statements.map((statement, idx) => (
        <p
          key={idx}
          className="text-sm sm:text-base md:text-lg text-gray-700 font-light leading-relaxed"
        >
          {statement}
        </p>
      ))}
    </div>
  )
}
