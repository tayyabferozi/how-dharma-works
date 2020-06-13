import React from "react";

import "./Features.css";
import techStack from "../../media/techStack.png";
import dharmaStack from "../../media/dharmaStack.png";
import compoundStack from "../../media/compoundStack.png";
import ethereumStack from "../../media/ethereumStack.png";

const Features = () => {
  return (
    <div className="Features">
      <img src={techStack} alt="tech-stack" className="TechStack" />
      <div className="FeaturesText">
        <div className="Feature">
          <img src={dharmaStack} alt="dharma-stack" />
          <h3>
            Dharma
          </h3>
          <ul>
            <li>
              Unlike your bank, Dharma never closes — you've got complete flexibility to deposit and withdraw your money at anytime. 24/7/365.
            </li>
            <li>
              Every Dharma account is built on top of the Dharma Smart Wallet, which means that you — and only you — will be able to control your money.
            </li>
          </ul>
        </div>
        <div className="Feature">
          <img src={compoundStack} alt="compound-stack" />
          <h3>
            Compound
          </h3>
          <ul>
            <li>
              When your money is relayed into Compound, you’ll start earning interest instantly.
            </li>
            <li>
              Borrowers on Compound have to commit far more collateral than the amount they’re borrowing, which protects depositors from the risk that a borrower defaults on their loans.
            </li>
          </ul>
        </div>
        <div className="Feature">
          <img src={ethereumStack} alt="ethereum-stack" />
          <h3>
            Ethereum
          </h3>
          <ul>
            <li>
              The Ethereum blockchain is a layer of open financial infrastructure that secures billions of dollars of transactions a day.
            </li>
            <li>
              Everything on the Ethereum blockchain is open source, which means that you can verify anything that is happening in a completely transparent way.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;