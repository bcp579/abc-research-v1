// Call-to-Action Section
'use client';

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="bg-zinc-100 flex items-center"
      style={{ minHeight: 'calc(100vh - 80px)' }}
    >
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Have a project in mind?</h2>
        <p className="text-grey-100 text-lg max-w-2xl mx-auto mb-8">
          {/* This is the corrected line */}
          Let&apos;s talk about how we can help you achieve your goals. Contact us today for a free consultation and quote.
        </p>
        <a href="mailto:contact@infonext.com" className="bg-blue-300 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block">
          Contact Us Now
        </a>
      </div>
    </section>
  );
}