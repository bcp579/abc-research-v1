// Why Choose Us Section
'use client';



export default function WhyChooseUsSection () {
    const points = [
        { title: "Expert Team", description: "Our certified professionals bring years of industry experience." },
        { title: "Customer-Centric", description: "We prioritize your needs and work collaboratively to achieve your goals." },
        { title: "Proven Results", description: "A track record of successful projects and satisfied clients." },
        { title: "Innovative Approach", description: "We stay ahead of technology trends to offer you the best solutions." },
    ];
    return (
        <section 
        className="py-20 md:py-28 flex item-center" 
        style={{ minHeight: 'calc(100vh - 80px)' }} 
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us?</h2>
                    <p className="text-lg text-gray-600 mt-2">The ABC Research advantage for your business.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {points.map((point, index) => (
                        <div key={index} className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
                            <p className="text-gray-600">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}