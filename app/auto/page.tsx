"use client";
import { useAtom } from "jotai";

import { CheckboxText } from "@/components/checkbox-text";
import { PhaseToggle } from "@/components/phase-toggle";
import { ScoringInput } from "@/components/scoring-input";
import { ScoringSection } from "@/components/scoring-section";
import { SelectInputText } from "@/components/select-input-text";
import { localDraftAtom } from "@/store/local-draft";

export default function Auto() {
  const [localDraft, setLocalDraft] = useAtom(localDraftAtom);
  /** @see https://stackoverflow.com/questions/55151041/window-is-not-defined-in-next-js-react-app */
  if (typeof window !== "undefined") {
    window.addEventListener("beforeunload", (event) => {
      const warningMessage =
        "Your changes have not been saved. Are you sure you want to leave?";
      event.preventDefault(); // Standard method for most browsers
      event.returnValue = warningMessage; // Legacy method for some browsers
      return warningMessage; // Some browsers will display a default message
    });
  }

  return (
    <>
      <PhaseToggle
        phases={[
          { href: "/auto", name: "Auto" },
          { href: "/teleop", name: "Teleop" },
          { href: "/end", name: "End" },
        ]}
      />

      <ScoringSection sectionName="Scored Sample">
        <ScoringInput
          defaultValue={localDraft.auto.net}
          onChange={(val) => {
            setLocalDraft({
              ...localDraft,
              auto: { ...localDraft.auto, net: val },
            });
          }}
          description="Net"
        />
        <ScoringInput
          defaultValue={localDraft.auto.lowBasket}
          onChange={(val) => {
            setLocalDraft({
              ...localDraft,
              auto: { ...localDraft.auto, lowBasket: val },
            });
          }}
          description="Low"
        />
        <ScoringInput
          defaultValue={localDraft.auto.highBasket}
          onChange={(val) => {
            setLocalDraft({
              ...localDraft,
              auto: { ...localDraft.auto, highBasket: val },
            });
          }}
          description="High"
        />
      </ScoringSection>

      <ScoringSection sectionName="Scored Specimen">
        <ScoringInput
          defaultValue={localDraft.auto.lowChamber}
          onChange={(val) => {
            setLocalDraft({
              ...localDraft,
              auto: { ...localDraft.auto, lowChamber: val },
            });
          }}
          description="Low"
        />
        <ScoringInput
          defaultValue={localDraft.auto.highChamber}
          onChange={(val) => {
            setLocalDraft({
              ...localDraft,
              auto: { ...localDraft.auto, highChamber: val },
            });
          }}
          description="High"
        />
      </ScoringSection>

      <div className="grid place-items-center gap-5 text-center">
        <CheckboxText
          description="Robot Disabled"
          defaultChecked={localDraft.auto.fouled}
          onChange={(checked) => {
            setLocalDraft({
              ...localDraft,
              auto: {
                ...localDraft.auto,
                fouled: checked,
              },
            });
          }}
        />
        <CheckboxText
          defaultChecked={localDraft.auto.fouled}
          onChange={(checked) => {
            setLocalDraft({
              ...localDraft,
              auto: {
                ...localDraft.auto,
                fouled: checked,
              },
            });
          }}
          description="Fouled"
        />
      </div>
      <div className="mb-3 block" />
      <div className="grid place-items-center gap-5 text-center">
        <SelectInputText
          description="Ascent"
          defaultValue={localDraft.auto.ascent}
          onChange={(value) => {
            setLocalDraft({
              ...localDraft,
              auto: { ...localDraft.auto, ascent: value },
            });
          }}
        >
          <option>None</option>
          <option>Observation</option>
          <option>Level 1</option>
        </SelectInputText>
      </div>
    </>
  );
}
