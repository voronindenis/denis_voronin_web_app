export default function Blog() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='bg-blue-600 py-4 text-center text-lg font-semibold text-white'>Blog</header>

      <main className='container mx-auto flex-1 p-6'>
        <h1 className='mb-4 text-3xl font-bold'>Latest Articles</h1>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {[...Array(6)].map((_, index) => (
            <article
              key={index}
              className='rounded-lg border p-4 shadow'
            >
              <h2 className='text-xl font-semibold'>Blog Post {index + 1}</h2>
              <p className='mt-2 text-gray-600'>This is a short description of the post.</p>
              <button className='mt-3 text-blue-600'>Read More →</button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
