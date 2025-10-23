

import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

export default function LegacyProjects() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={styles.heading2}>Legacy Projects</h2>
          <p className={`${styles.paragraph} mt-5 text-center`}>
            Legacy project details are coming soon.
          </p>
          <Footer />
        </div>
      </div>
    </div>
  );
}
