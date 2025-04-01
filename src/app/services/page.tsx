export default function Services() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='bg-purple-600 py-4 text-center text-lg font-semibold text-white'>Our Services</header>

      <main className='container mx-auto flex-1 p-6'>
        <h1 className='mb-4 text-3xl font-bold'>What We Offer</h1>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {['Web Design', 'SEO', 'Marketing', 'Development', 'Branding', 'Consulting'].map((service, index) => (
            <div
              key={index}
              className='rounded-lg border p-4 shadow'
            >
              <h2 className='text-xl font-semibold'>{service}</h2>
              <p className='mt-2 text-gray-600'>Learn more about our {service.toLowerCase()} solutions.</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
