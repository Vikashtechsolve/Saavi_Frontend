
import { content } from "@/lib/content";

export default function banqAndEvents() {
    const images = content.banqAndEvents.images;

    return (
        <div className="pt-24 mb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-[#8B2B06] text-center mb-16">BANQUET AND EVENTS</h1>
                <div className="mb-16">
                    <p className="text-base mb-5">{content.banqAndEvents.description1}</p>
                    <p className="text-base mb-5">{content.banqAndEvents.description2}</p>
                    <p className="text-base mb-5">{content.banqAndEvents.description3}</p>
                </div>
                <div>
                <h1 className="text-3xl font-bold text-[#8B2B06] text-center mb-4">Contact Details</h1>
                    <h2 className=" text-center">{content.company.contact.address}</h2>
                    <h2 className=" text-center">{content.company.contact.phone}</h2>
                    <h2 className=" text-center mb-16">{content.company.contact.email}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3]"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}