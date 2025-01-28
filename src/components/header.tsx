import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          DerivativeGPT
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/docs" className="text-sm font-medium">
            Documentation
          </Link>
          <Link href="/community" className="text-sm font-medium">
            Community
          </Link>
          <ModeToggle />
          <Button>Sign In</Button>
        </nav>
      </div>
    </header>
  )
}

