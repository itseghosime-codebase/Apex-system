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
    heading: "What exactly do your DM setters do?",
    description:
      "Our trained DM setters engage with your leads through direct messages (Instagram, Facebook, LinkedIn, etc.), spark real conversations, qualify prospects, and book them directly into your calendar for sales calls. They handle all the back-and-forth so you can focus on closing.",
  },
  {
    heading: "Who trains your setters?",
    description:
      "All our setters go through a proven training program led by experts in high-ticket sales and conversational marketing. They're taught to understand buyer psychology, objection handling, tonality, and how to represent your offer with clarity and confidence.",
  },
  {
    heading: "Will the setters sound like me or my brand?",
    description:
      "Yes. Before we begin, we work closely with you to understand your brand voice, target audience, and offer. We then create custom scripts and messaging frameworks to ensure every message feels authentic and aligned with your tone.",
  },
  {
    heading: "What platforms do you operate on?",
    description:
      "We currently support DM outreach on Instagram, Facebook, and LinkedIn. If you're active on multiple platforms, we’ll help you prioritize based on where your ideal clients are most engaged.",
  },
];
