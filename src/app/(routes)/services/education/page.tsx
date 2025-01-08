"use client";

import { TutoringForm } from "@/app/components/tutoringForm";
import { useState } from "react";

export default function EducationService() {
  const [goTo, setGoTo] = useState(false);
  const Click = () => {
    setGoTo(true);
  };

  return (
    <>
      <h3>Coding Education Service</h3>
      <button type="button" className="btn-submit" onClick={() => Click()}>
        Apply
      </button>
      {goTo ? <TutoringForm /> : null}
      
    </>
  );
}
