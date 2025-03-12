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
      answer: "All youth in the Greater Phoenix Area and their friends, ages 14 (at the time of the concert) to 18, are invited. Register for an Entry Pass at StriveToBeAZ.org and select the Mesa location. An Entry Pass is required for entry and will be available on the website through the concert date."
    },
    {
      question: "Can Stakes and Wards start promoting the concert, or are we waiting for more information?",
      answer: "Yes! You can use the English and Spanish flyers, as well as content from the social media pages @StriveToBeAZ, to share with youth and their parents. Encourage them to register at StriveToBeAZ.org."
    },
    {
      question: "How many Entry Passes will be available?",
      answer: "There is no limit on Entry Passes. The Mesa Amphitheater has a capacity of 5,000. Doors open at 7:00 PM. Arriving early ensures entry and allows you to enjoy the Pre-Show, featuring Hip Hop Hommies, Rag Tag Band (a local high school group), and McKenna Breinholt, a Top 5 contestant on American Idol! Overflow seating will be available nearby if needed."
    },
    {
      question: "Can youth with special needs be accommodated?",
      answer: "Yes! The Mesa Amphitheater offers ADA accommodations, and ASL interpreters will be available. Youth needing a companion can have an adult register to accompany them. Send specific questions to info@StriveToBeAZ.org."
    },
    {
      question: "Is there free parking for the Strive To Be Concert?",
      answer: "Yes, there are some free parking lots near the Mesa Amphitheater. If those fill up, paid parking spots managed by the City of Mesa are available. Volunteers will greet and direct youth to and from parking lots before and after the concert."
    },
    {
      question: "Can I drop off my teenagers and pick them up afterward?",
      answer: "Yes! Thank you for bringing them! This will be an awesome experience for our youth. Downtown Mesa offers plenty to explore, including the Mesa Temple and delicious restaurants. Drop-off will be similar to Stake Dances. For pickup, establish a meeting plan in case phone batteries die during the concert."
    },
    {
      question: "Our Stake is farther away, and we're considering renting a bus to transport our youth. Is there a place to park it?",
      answer: "Yes! There are parking options near the Mesa Amphitheater, and a nearby Stake Center can accommodate a bus to park and wait."
    },
    {
      question: "If I register but can't attend, can I cancel my Entry Pass?",
      answer: "Yes! Thank you for considering this. The final email with your Entry Pass will include an option to return it."
    },
    {
      question: "Can youth who are old enough drive themselves?",
      answer: "That's up to the parents! Parking is available, and volunteers will assist youth in all parking lots to ensure they arrive safely at the Mesa Amphitheater. Early arrivals can park in the closest free lots; paid lots managed by the City of Mesa (estimated $5–$15) are also available."
    },
    {
      question: "How many adult volunteers do you need from each Stake?",
      answer: "Four adults: 1 Stake YW President (or a substitute), 1 Stake YM President (or a substitute), 1 male (to assist with parking and security), and 1 female (to help with greeting and assisting in and around the Mesa Amphitheater)."
    },
    {
      question: "If I'm driving my youth, can I stay with them?",
      answer: "Thank you for driving! To maximize space for Arizona youth, parent drivers are asked to drop off and return later, similar to local Stake Dances. Please establish a pickup plan before dropping them off."
    },
    {
      question: "I'm a Stake Leader and missed the informational Zoom meeting. Is there a recording?",
      answer: "Yes! All Stake Leaders received an email from Elder Lewis requesting contact information for each Stake YW President, YM President, and High Council Member assigned to the Young Women. Those who provided this should receive an email with a link to the recorded Zoom meeting, Q&A, and flyers. If you think you should have received this but haven't, email info@StriveToBeAZ.org."
    },
    {
      question: "Will there be snacks available?",
      answer: "Yes! The Mesa Amphitheater's concession stand will offer snacks and drinks for purchase. No outside food or drinks are permitted."
    },
    {
      question: "Can my teenager bring a purse or shoulder bag?",
      answer: "The Mesa Amphitheater requires most bags to be returned to vehicles. Clear bags with approved items are allowed."
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