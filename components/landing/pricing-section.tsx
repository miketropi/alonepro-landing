"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { PRICING_DATA } from "@/data/pricing";

export type BillingTerm = "annual" | "lifetime";

export function PricingSection() {
  const [billingTerm, setBillingTerm] = useState<BillingTerm>("annual");
  const isLifetime = billingTerm === "lifetime";

  return (
    <section className="section" id="pricing" data-od-id="pricing">
      <div className="container">
        <div className="section-head pricing-head">
          <div>
            <p className="eyebrow">Simple licensing</p>
            <h2 data-od-id="pricing-heading">
              Choose the license that fits your work.
            </h2>
            <p className="lead" style={{ marginTop: "20px" }}>
              Select annual access or a lifetime license, then choose the number
              of websites you need.
            </p>
          </div>

          <div
            className="billing-control"
            role="group"
            aria-label="Choose billing term"
            data-od-id="billing-term-selector"
          >
            <button
              className="billing-option"
              type="button"
              aria-pressed={billingTerm === "annual"}
              onClick={() => setBillingTerm("annual")}
              data-billing="annual"
              data-od-id="billing-annual"
            >
              Annual
            </button>
            <button
              className="billing-option"
              type="button"
              aria-pressed={billingTerm === "lifetime"}
              onClick={() => setBillingTerm("lifetime")}
              data-billing="lifetime"
              data-od-id="billing-lifetime"
            >
              Lifetime
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid" aria-live="polite">
          {PRICING_DATA.map((plan) => {
            const price = isLifetime ? plan.lifetimePrice : plan.annualPrice;
            return (
              <article
                key={plan.id}
                className="price-card"
                data-od-id={plan.id}
                data-pricing-id={plan.pricingId}
              >
                <p className="price-kicker">{plan.kicker}</p>
                <h3>{plan.headline}</h3>

                <div
                  className="price num"
                  data-annual={plan.annualPrice}
                  data-lifetime={plan.lifetimePrice}
                >
                  <span className="price-currency">$</span>
                  <span className="price-amount">{price}</span>
                </div>

                <p className="price-note">
                  <span className="price-term">
                    {isLifetime ? "Lifetime price" : "Annual price"}
                  </span>{" "}
                  · USD
                </p>

                <ul className="price-list">
                  {plan.features.map((feat) => (
                    <li key={feat}>
                      <Check className="lucide lucide-check" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className={`btn ${
                    plan.isPrimary ? "btn-primary" : "btn-secondary"
                  }`}
                  href={plan.targetId}
                  data-plan={plan.kicker}
                  data-term={billingTerm}
                >
                  {plan.ctaText}
                </a>
              </article>
            );
          })}
        </div>

        <p className="asset-note" id="purchase-note">
          <span className="num">CHECKOUT</span>
          <span>
            Annual and lifetime prices are configured. Connect each plan and billing
            term to its checkout destination before launch.
          </span>
        </p>
      </div>
    </section>
  );
}
