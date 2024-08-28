import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Two34 Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Two34 Labs</h1>
        </div>
      </header>

      <main>
        {<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-bold mb-4">About Two34 Labs</h2>
            <p className="mb-4">
              Two34 Labs is a product studio that specializes in creating innovative software solutions. Our team of experienced developers and designers are passionate about building products that solve real-world problems.
            </p>
            <div className="space-x-4">
              <button className="bg-black text-white px-4 py-2 rounded">Learn More</button>
              <button className="bg-white text-black px-4 py-2 rounded border border-black">Contact Us</button>
            </div>
          </div>
          <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
            {['Building a Scalable Web App', 'Designing for Accessibility', 'Optimizing for Performance'].map((title, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Learn how we approach {title.toLowerCase()} in our projects.
                  </p>
                </div>
                <div className="px-4 py-4 sm:px-6">
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Read More <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>}
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Two34 Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}