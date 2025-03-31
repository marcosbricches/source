// Mock component for DateRangePicker
import { CalendarIcon } from 'lucide-react'

export
function DateRangePicker() {
  return (
    <div className="flex gap-2 items-center border rounded-md px-3 py-2">
      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
      <span className="text-sm">01/03/2025 - 17/03/2025</span>
    </div>
  )
}