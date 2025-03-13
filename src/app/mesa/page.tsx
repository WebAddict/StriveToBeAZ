"use client";

import Image from 'next/image'; // Import Image component
import Navbar from '@/components/navbar/Navbar';
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Register from '@/components/register/Register';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useState } from 'react';

// FAQ Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is invited to the Strive To Be Concert at the Mesa Amphitheater on Friday, March 28?",
      answer: "All youth ages 14–18 and their friends are invited. An entry pass is required and can be obtained at StriveToBeAZ.org. Registration will remain open until the concert date, but please register as soon as possible to secure your spot."
    },
    {
      question: "Can Stakes and Wards start promoting the concert now, or should they wait for more information?",
      answer: "Yes, you can start promoting the concert immediately. Use the English and Spanish flyers and content from our social media pages (@StriveToBeAZ). Encourage youth—or parents on behalf of their youth—to register at StriveToBeAZ.org."
    },
    {
      question: "How many entry passes will be available?",
      answer: "The Mesa Amphitheater has a capacity of 5,000. Entry passes are required and can be obtained by registering at StriveToBeAZ.org. Entry is on a first-come, first-served basis for those with passes. Doors open at 7 PM, and early arrivals can enjoy a pre-show featuring Hip Hop Homies, Rag Tag Band (a local high school group), and McKenna Breinholt, a Top 5 contestant on *American Idol*."
    },
    {
      question: "Can youth with special needs be accommodated?",
      answer: "Yes, the Mesa Amphitheater is ADA-accessible, and ASL interpreters will be available. Youth needing a companion can have an adult register to accompany them. For specific accommodations, email info@StriveToBeAZ.org."
    },
    {
      question: "Is there free parking for the Strive To Be Concert?",
      answer: "Yes, free parking lots are available near the Mesa Amphitheater, along with paid parking options. Attendees are responsible for finding their own parking and should be prepared to pay if free spaces are unavailable."
    },
    {
      question: "Can I drop off my teenagers and pick them up after the concert?",
      answer: "Yes, drop-off and pick-up will be similar to any major concert production. Attendees are responsible for their own arrangements. Downtown Mesa offers activities and dining options for parents or leaders planning to wait. Establish a clear pick-up location and communication plan with your youth in advance."
    },
    {
      question: "Our Stake is considering renting a bus to transport our youth. Is there parking available for buses?",
      answer: "Carpooling and buses are encouraged, but attendees must arrange their own parking. Contact info@StriveToBeAZ.org for assistance with bus parking options if needed."
    },
    {
      question: "If I register but can’t attend, can I cancel my entry pass?",
      answer: "Yes, you can cancel your entry pass using the cancellation option in the confirmation email sent before the concert. Alternatively, email info@StriveToBeAZ.org to cancel."
    },
    {
      question: "If I’m driving my youth, can I stay for the concert?",
      answer: "No, due to limited capacity, parents and leaders are asked to drop off and return for pick-up. Arrange a clear pick-up and communication plan in advance. If your youth requires specific accommodations, email info@StriveToBeAZ.org."
    },
    {
      question: "Can attendees bring a purse or bag to the concert?",
      answer: "Per Mesa Amphitheater rules, only clear bags with permitted items are allowed. Clear plastic or vinyl PVC bags must not exceed 12\" x 6\" x 12\". Non-clear bags must be returned to vehicles. For details on permitted and prohibited items, visit https://www.mesaamphitheater.com/rules/. For specific questions, email info@StriveToBeAZ.org."
    },
    {
      question: "Can attendees bring a drink or food to the concert?",
      answer: "Per Mesa Amphitheater rules, one factory-sealed, unfrozen water bottle (up to 20 oz) per person is allowed. Food is not permitted. For details on permitted and prohibited items, visit https://www.mesaamphitheater.com/rules/. For specific questions, email info@StriveToBeAZ.org."
    },
    {
      question: "Where can I find more information and updates?",
      answer: "For the latest updates, visit www.StriveToBeAZ.org. For additional questions, email info@StriveToBeAZ.org. We look forward to an inspiring and memorable evening!"
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-white text-center text-4xl font-semibold mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="text-white border-b border-gray-600">
            <button
              className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <IconChevronUp className="w-6 h-6" />
              ) : (
                <IconChevronDown className="w-6 h-6" />
              )}
            </button>
            {openIndex === index && (
              <p className="py-2 text-gray-200">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <VideoPlayer />
      <div className="w-full max-w-3xl mx-auto">
        <div className="mt-12">
          <div className="text-white text-center text-4xl font-semibold">
            <em className="mb-3 text-6xl font-semibold">Strive To Be</em>
            <br /> is coming to MESA ARIZONA on March 28, 2025
          </div>
        </div>
        <div className="my-12">
          <div className="text-white text-center text-3xl font-semibold">
            Who: Youth 14-18 years old
            <br />Where: Mesa Amphitheatre
            <br />When: 3/28 gate opens at 7pm
            <br />Show: 8pm to 10pm
            <br />Wear: FSY Standards
          </div>
        </div>
        <Register event="mesa" />
        {/* Add the image here, directly above FAQSection */}
        <div className="mt-12">
          <Image
            src="https://imagedelivery.net/t4tWTFbtcosKvDi5rJCaNw/1d8cf9cb-8a32-4697-2ea0-3ceb9c9ac300/public"
            alt="Strive To Be Concert Mesa 2025"
            width={672} // Adjust based on actual image dimensions
            height={378} // Adjust based on actual image dimensions
            className="w-full h-auto"
          />
        </div>
        <FAQSection />
        <div className="my-12">
          <iframe
            className="w-full h-[450px]" // Set width to full and a reasonable height
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA_UGBkHuf-iNbaNfDo3NXCtsSimY2vhvA&q=Mesa+Amphitheatre,North+Center+Street,Mesa+AZ"
          ></iframe>
        </div>
      </div>
    </main>
  );
}