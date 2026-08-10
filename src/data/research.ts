// The lab's research areas, structured. Adopted 2026-08-10 (Jonathan's four-way
// grouping: Li–Cs apparatus, DBT, Theory, Colloidal Quantum Dots).
// Li–Cs and DBT paragraphs are Jonathan's existing research-page text. The
// THEORY and QD paragraphs are DRAFT copy (draft: true renders a visible chip)
// until Jonathan rewrites them.
// `paragraphs` and `images` are arrays on purpose: sections are expected to
// grow — add more entries and the page lays them out without code changes.
import { PUBS, type Pub, type Area } from "./publications";

export interface ResearchArea {
  key: Area;
  title: string;
  short: string;
  images: string[];
  alt: string;
  paragraphs: string[];
  draft?: boolean;
}

export const AREAS: ResearchArea[] = [
  {
    key: "lics",
    title: "The Lithium–Cesium Apparatus",
    short: "",
    images: [],
    alt: "Lithium and cesium atoms in optical tweezers",
    // Jonathan will write this section himself; the page shows a placeholder.
    paragraphs: [],
  },
  {
    key: "dbt",
    title: "Dibenzoterrylene (DBT)",
    short: "Lifetime-limited organic emitters and hybrid nanophotonics",
    images: ["/media/dfd400_995229aab0034d4980e78284b79be0cc~mv2.png"],
    alt: "Organic molecular emitters",
    paragraphs: [
      "Organic molecules in the solid state are a remarkable platform for quantum photonics and many-body quantum optics. Certain polycyclic aromatic hydrocarbons, such as dibenzoterrylene, exhibit lifetime-limited optical linewidths at cryogenic temperatures and emit predominantly into the zero-phonon line, making them nearly ideal single-photon sources.",
      "Our group investigates coherent dipole-dipole interactions between organic emitters for applications in quantum networking and fundamental many-body physics. We demonstrated the first observation of superradiant and subradiant states in lifetime-limited organic molecules, achieved through a novel laser-induced frequency tuning technique that brings pairs of emitters into resonance (Lange et al., Nature Physics 2024).",
      "Building on these results, we have developed a hybrid molecular-nanophotonic platform that integrates organic emitters with photonic integrated circuits for on-chip cavity quantum electrodynamics and collective interactions (Lange et al., ACS Nano 2026). We are also exploring vapor-phase assembly techniques for depositing high-quality molecular emitter crystals directly onto photonic structures, opening a route to wafer-scale quantum photonic devices.",
    ],
  },
  {
    key: "theory",
    title: "Theory",
    short: "Macroscopic QED, Green's-function methods, and cooling theory",
    images: [],
    alt: "",
    draft: true,
    paragraphs: [
      "Alongside our experiments, we develop the theoretical tools that describe how atoms and molecules interact with light in complex environments. This includes a first-order Maxwell operator formalism for macroscopic quantum electrodynamics in dispersive and absorbing media, Green's-function methods for atom-light interactions in nanophotonic structures, and a generalized theory of optical cooling for trapped atoms with spin.",
    ],
  },
  {
    key: "qd",
    title: "Colloidal Quantum Dots",
    short: "A new direction in bottom-up solid-state emitters",
    images: [],
    alt: "",
    draft: true,
    paragraphs: [
      "Our newest effort extends the lab's bottom-up approach to solid-state quantum emitters to colloidal quantum dots. Like our organic molecules, colloidal quantum dots are chemically synthesized emitters that can be placed into photonic structures, offering a complementary route to scalable quantum light sources. Our first paper in this direction is on its way.",
    ],
  },
];

export function papersFor(area: Area): Pub[] {
  return PUBS.filter((p) => p.area === area);
}
