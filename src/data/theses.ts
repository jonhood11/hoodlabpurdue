// The lab's thesis list, structured. Transcribed 2026-08-10 from
// content/pages/theses.md (now retired from the page). Portraits reuse the
// Team page media; David Peana's all-caps Wix title is stored in title case.
export const CHAMPAGNE = "/media/dfd400_d88ef86856164b1c82717f6dd686a19a~mv2.jpeg";
export const COUNT_HEADING = "Our Graduation Count!";

export interface Thesis {
  year: number;
  title: string;
  href: string;
  person: string;
  group: string;
  portrait: string;
}

export const THESES: Thesis[] = [
  {
    year: 2026,
    title: "Cooling Lithium and Cesium Single Atoms in Optical Tweezers",
    href: "https://hammer.purdue.edu/articles/thesis/_b_Cooling_Lithium_and_Cesium_Single_Atoms_in_Optical_Tweezers_b_/32867018?file=66390728",
    person: "Saumitra Phatak",
    group: "Ultracold Group",
    portrait: "/media/dfd400_7986e4104e0f4e69bf61299da3408818~mv2.jpg",
  },
  {
    year: 2025,
    title: "Quantum light-matter interactions with organic molecules",
    href: "https://hammer.purdue.edu/articles/thesis/Quantum_light-matter_interactions_with_organic_molecules/30753941?file=60043625",
    person: "Christian Lange",
    group: "Quantum Optics Group",
    portrait: "/media/dfd400_6fa00e6f312e4db99d620dc6e886f4fb~mv2.jpg",
  },
  {
    year: 2024,
    title:
      "Progress Toward the Feshbach Association of Lithium and Cesium Atoms in Optical Tweezer Arrays",
    href: "https://hammer.purdue.edu/articles/thesis/PROGRESS_TOWARD_THE_FESHBACH_ASSOCIATION_OF_LITHIUM_AND_CESIUM_ATOMS_IN_OPTICAL_TWEEZER_ARRAYS/26321572?file=47804833",
    person: "David Peana",
    group: "Ultracold Group",
    portrait: "/media/dfd400_72a31c08231248a7910fcb63409ffe91~mv2.jpg",
  },
  {
    year: 2017,
    title: "Atom-Light Interactions in a Photonic Crystal Waveguide",
    href: "https://thesis.caltech.edu/10313/",
    person: "Jonathan Hood (PI)",
    group: "Caltech",
    portrait: "/media/dfd400_c0d6506fa1de44dcb55b5f3a5889bbf2~mv2.jpg",
  },
];
