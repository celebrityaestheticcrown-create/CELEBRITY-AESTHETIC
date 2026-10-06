"use client";

import { useState, useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { DISCLAIMER } from "@/lib/constants";
import { defaultFaqs, type FAQItem } from "@/lib/faqs";

export type { FAQItem };

export default function FAQAccordion({
  items = defaultFaqs,
  showDisclaimer = true,
}: {
  items?: FAQItem[];
  showDisclaimer?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="scroll-mt-28 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading kicker="FAQ" title="Common questions" align="center" />

        <div className="mt-12 divide-y divide-gold/20 border-y border-gold/20">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-grotesk text-base font-medium text-charcoal hover:text-gold-dark"
                  >
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 font-grotesk text-lg text-gold-dark transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      animate={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { height: "auto", opacity: 1 }
                      }
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 font-grotesk text-base leading-relaxed text-charcoal/70">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {showDisclaimer && (
          <p className="mt-8 text-center font-grotesk text-base italic leading-relaxed text-charcoal/50">
            {DISCLAIMER}
          </p>
        )}
      </div>
    </section>
  );
}
