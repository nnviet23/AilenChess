import { redirect } from 'next/navigation'

export default function DashboardPage() {
  // Redirect to analyze page as default
  redirect('/dashboard/analyze')
}
