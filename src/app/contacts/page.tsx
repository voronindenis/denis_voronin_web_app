export default function Contacts() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='bg-green-600 py-4 text-center text-lg font-semibold text-white'>Contact Us</header>

      <main className='container mx-auto flex-1 p-6'>
        <h1 className='mb-4 text-3xl font-bold'>Get in Touch</h1>
        <div className='mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg'>
          <form className='space-y-4'>
            <div>
              <label className='block font-medium'>Name</label>
              <input
                type='text'
                className='w-full rounded-md border p-2'
              />
            </div>
            <div>
              <label className='block font-medium'>Email</label>
              <input
                type='email'
                className='w-full rounded-md border p-2'
              />
            </div>
            <div>
              <label className='block font-medium'>Message</label>
              <textarea className='w-full rounded-md border p-2'></textarea>
            </div>
            <button className='w-full rounded-md bg-green-600 p-2 text-white'>Send Message</button>
          </form>
        </div>
      </main>
    </div>
  );
}
