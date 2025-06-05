import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "./magicui/blur-fade";

export default function Faq() {
  return (
    <div id="faq" className="py-20 relative z-20">
      <div className="container">
        <BlurFade inView>
          <h4 className="text-center text-2xl md:text-3xl font-semibold text-secondary pb-5">
            Frequently Asked Question
          </h4>
        </BlurFade>
        <section className="pb-10">
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto space-y-3 text-white"
          >
            {FaQuestions.map((items, index) => (
              <AccordionItem
                key={index}
                value={"item-" + index}
                className="bg-white/[1%] border border-white/5 py-2 px-5 rounded-md"
              >
                <AccordionTrigger className="md:text-lg font-normal">
                  {items.heading}
                </AccordionTrigger>
                <AccordionContent>{items.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
}

const FaQuestions = [
  {
    heading: 'What exactly do you mean by "Smart CRM Setup"?',
    description:
      "A Smart CRM Setup refers to a fully customized customer relationship management system that includes tailored workflows, automated follow-ups, and real-time pipeline tracking—designed to reduce no-shows and increase conversions.",
  },
  {
    heading: " How does this setup help reduce no-shows?",
    description: "We implement automated reminders via email, SMS, or calls, and design workflows that keep leads engaged and accountable—so appointments are more likely to happen."
  },
  {
    heading: "Is this setup tailored to my specific business or industry?",
    description:
      "Yes! We customize every CRM setup based on your sales process, team size, industry, and pain points.",
  },
  {
    heading: "Do you offer ongoing support after the initial setup?",
    description: "Yes. We offer optional monthly support plans to help you optimize, troubleshoot, and train your team as you grow.",
  },
];
