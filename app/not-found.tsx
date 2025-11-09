import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Page Not Found</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
