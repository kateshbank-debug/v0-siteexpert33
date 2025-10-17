import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTAButton() {
  return (
    <div className="flex justify-center my-12">
      <Button asChild size="lg" className="group">
        <Link href="/contact">
          Заказать консультацию
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  )
}
