// The lab's publication list, structured. Transcribed 2026-08-10 from the flat
// Wix-export markdown (content/pages/publications.md, now retired from the page);
// each entry carries its real year so the page can group and sort by year.

export const SCHOLAR = "https://scholar.google.com/citations?user=-Rkv_5EAAAAJ&hl=en";

// Research-page section a paper belongs to (untagged papers appear only on
// the Publications page): theory | lics (Li–Cs apparatus) | dbt | qd.
export type Area = "theory" | "lics" | "dbt" | "qd";

export interface Pub {
  year: number;
  title: string;
  authors: string;
  venue?: { label: string; href?: string };
  arxiv?: string;
  extras?: { label: string; href: string }[];
  thumb?: string;
  note?: string;
  area?: Area;
}

export const PUBS: Pub[] = [
  {
    year: 2026,
    title: "Vapor Phase Assembly of Molecular Emitter Crystals for Photonic Integrated Circuits",
    authors:
      "Arya D. Keni, Christian M. Lange, Adhyyan S. Mansukhani, Emma Daggett, Ankit Kundu, Ishita Agarwal, Patrick Bak, Benjamin Cerjan, Jonathan D. Hood",
    venue: { label: "arXiv preprint" },
    arxiv: "https://arxiv.org/abs/2602.18517",
    thumb: "/media/dfd400_2e3247a58ea14c5a96d0dd31a4f2646e~mv2.png",
    area: "dbt",
  },
  {
    year: 2026,
    title: "First Order Maxwell Operator Formalism for Macroscopic Quantum Electrodynamics",
    authors: "Ishita Agarwal, Ankit Kundu, Christian M. Lange, and Jonathan D. Hood",
    venue: { label: "arXiv preprint" },
    arxiv: "https://arxiv.org/abs/2603.27475",
    thumb: "/media/dfd400_b2c684a4f73c44f6a4fb21c0a5fe29a0~mv2.png",
    area: "theory",
  },
  {
    year: 2026,
    title:
      "A Hybrid Molecular–Nanophotonic Platform for On-Chip Cavity Quantum Electrodynamics and Collective Interactions",
    authors:
      "Christian M. Lange, Arya D. Keni, Ishita Agarwal, Emma Daggett, Adhyyan S. Mansukhani, Ankit Kundu, Benjamin Cerjan, Libai Huang, Jonathan D. Hood",
    venue: { label: "ACS Nano 20, 9867–9874 (2026)" },
    arxiv: "https://arxiv.org/abs/2506.01917",
    thumb: "/media/dfd400_da2e1124868a4305860bc2eab55a832e~mv2.png",
    area: "dbt",
  },
  {
    year: 2026,
    title: "Many-body entanglement in solid-state emitters",
    authors:
      "Emma Daggett, Christian M. Lange, Bennet Windt, Arshag Danageozian, Alexander Senichev, Jordi Arnau Montañà-López, Chanchal, Kinjol Barua, Xingyu Gao, Zhaoyun Zheng, Vijin Kizhake Veetil, Souvik Biswas, Jonas M. Peterson, Na Liu, Chuchuan Hong, Teri Odom, Matthew Pelton, Tongcang Li, Jelena Vučković, Vladimir M. Shalaev, Alexandra Boltasseva, Sophia E. Economou, Jonathan D. Hood, Valentin Walther, Rahul Trivedi, Libai Huang",
    venue: {
      label: "Nature Reviews Materials 11, 354–374 (2026)",
      href: "https://www.nature.com/articles/s41578-026-00893-8",
    },
    thumb: "/media/dfd400_6bc032ea9e9d412295cf3822d6bab716~mv2.png",
    area: "dbt",
  },
  {
    year: 2025,
    title:
      "Narrow-Line Electric Quadrupole Cooling and Background-Free Imaging of a Single Cs Atom with Spatially Structured Light",
    authors:
      "Karl N. Blodgett*, Saumitra S. Phatak*, Meng Raymond Chen, David Peana, Claire Pritts, and Jonathan D. Hood",
    venue: {
      label: "Phys. Rev. A 112, 043109 (2025)",
      href: "https://journals.aps.org/pra/abstract/10.1103/vr4g-h995",
    },
    arxiv: "https://arxiv.org/abs/2505.10540v1",
    thumb: "/media/dfd400_7036ed75eef1471f8a6ff5f3debd5ede~mv2.png",
    note: "* equal contribution",
    area: "lics",
  },
  {
    year: 2024,
    title: "A Generalized Theory for Optical Cooling of a Trapped Atom with Spin",
    authors:
      "Saumitra S. Phatak, Karl N. Blodgett, David Peana, Meng Raymond Chen, and Jonathan D. Hood",
    venue: {
      label: "Phys. Rev. A 110, 043116 (2024)",
      href: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.110.043116",
    },
    arxiv: "https://arxiv.org/abs/2406.19153",
    thumb: "/media/dfd400_e5cbf91bb7a2486b88ae5624564fc752~mv2.png",
    area: "theory",
  },
  {
    year: 2024,
    title:
      "Superradiant and subradiant states in lifetime-limited organic molecules through laser-induced tuning",
    authors: "Christian Lange, Emma Daggett, Valentin Walther, Libai Huang, Jonathan D. Hood",
    venue: {
      label: "Nature Physics 20, 836 (2024)",
      href: "https://doi.org/10.1038/s41567-024-02404-4",
    },
    arxiv: "https://arxiv.org/pdf/2308.08037.pdf",
    extras: [
      {
        label: "News & Views: Organic molecules pumped to resonance",
        href: "https://www.nature.com/articles/s41567-024-02410-6",
      },
    ],
    area: "dbt",
  },
  {
    year: 2023,
    title: "Imaging a Li Atom in an Optical Tweezer 2000 Times with Λ-Enhanced Gray Molasses",
    authors: "KN Blodgett, D Peana, S Phatak, LM Terry, MP Montes, Jonathan D. Hood",
    venue: {
      label: "Phys. Rev. Lett. 131, 083001 (2023)",
      href: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.131.083001",
    },
    area: "lics",
  },
  {
    year: 2023,
    title: "High resolution photoassociation spectroscopy of the excited potential of NaCs",
    authors:
      "Lewis RB Picard, Jessie T Zhang, William B Cairncross, Kenneth Wang, Gabriel E Patenotte, Annie J Park, Yichao Yu, Lee R Liu, Jonathan D. Hood, Rosario González-Férez, Kang-Kuen Ni",
    venue: {
      label: "Phys. Rev. Research 5, 023149 (2023)",
      href: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.5.023149",
    },
    arxiv: "https://arxiv.org/abs/2302.09113",
  },
  {
    year: 2021,
    title: "Coherent optical creation of a single molecule",
    authors:
      "Yichao Yu, Kenneth Wang, Jonathan D. Hood, Lewis RB Picard, Jessie T Zhang, William B Cairncross, Jeremy M Hutson, Rosario Gonzalez-Ferez, Till Rosenband, Kang-Kuen Ni",
    venue: { label: "Phys. Rev. X 11, 031061 (2021)" },
    extras: [
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-Rkv_5EAAAAJ&sortby=pubdate&citation_for_view=-Rkv_5EAAAAJ:O3NaXMp0MMsC",
      },
    ],
  },
  {
    year: 2020,
    title: "Forming a single molecule by magnetoassociation in an optical tweezer",
    authors:
      "JT Zhang, Y Yu, WB Cairncross, K Wang, LRB Picard, JD Hood, Y-W Lin, JM Hutson, K-K Ni",
    venue: {
      label: "Phys. Rev. Lett. 124, 253401 (2020)",
      href: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.124.253401",
    },
    arxiv: "https://arxiv.org/abs/2003.07850",
  },
  {
    year: 2020,
    title: "Reduction of laser intensity noise over 1 MHz band for single atom trapping",
    authors: "Y Wang, K Wang, EF Fenton, YW Lin, K-K Ni, JD Hood",
    venue: { label: "Optics Express 28(21), 31209–31215 (2020)" },
    arxiv: "https://arxiv.org/abs/2008.03504",
  },
  {
    year: 2020,
    title: "Multichannel interactions of two atoms in an optical tweezer",
    authors: "JD Hood, YC Yu, YW Lin, JT Zhang, K Wang, LR Liu, B Gao, and K-K Ni",
    venue: {
      label: "Phys. Rev. Research 2, 023108 (2020)",
      href: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.023108",
    },
    arxiv: "https://arxiv.org/abs/1907.11226",
  },
  {
    year: 2018,
    title: "Building one molecule from a reservoir of two atoms",
    authors: "LR Liu, JD Hood, YC Yu, JT Zhang, NR Hutzler, T Rosenband, and K-K Ni",
    venue: {
      label: "Science (cover), 360(6391), 900–903 (2018)",
      href: "https://doi.org/10.1126/science.aar7797",
    },
    arxiv: "https://arxiv.org/abs/1804.04752",
    note: "Science cover",
  },
  {
    year: 2018,
    title: "Motional ground-state cooling outside the Lamb-Dicke regime",
    authors: "YC Yu, NR Hutzler, JT Zhang, LR Liu, JD Hood, T Rosenband, and K-K Ni",
    venue: {
      label: "Phys. Rev. A 97, 063423 (2018)",
      href: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.97.063423",
    },
    arxiv: "https://arxiv.org/abs/1708.03296",
  },
  {
    year: 2017,
    title:
      "Atom-light interactions in quasi-one-dimensional nanostructures: A Green's-function perspective",
    authors: "A Asenjo-Garcia, JD Hood, DE Chang, and HJ Kimble",
    venue: {
      label: "Phys. Rev. A 95, 033818 (2017)",
      href: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.95.033818",
    },
    // Corrected 2026-08-10: the Wix site carried the Lamb-Dicke paper's arXiv id here.
    arxiv: "https://arxiv.org/abs/1606.04977",
    area: "theory",
  },
  {
    year: 2016,
    title: "Atom-atom interactions around the band edge of a photonic crystal waveguide",
    authors: "JD Hood, A Goban, A Asenjo-Garcia, M Lu, S-P Yu, DE Chang, and HJ Kimble",
    venue: {
      label: "PNAS 113(38), 10507–10512 (2016)",
      href: "https://doi.org/10.1073/pnas.1603788113",
    },
    // Corrected 2026-08-10: the Wix site carried the Green's-function paper's arXiv id here.
    arxiv: "https://arxiv.org/abs/1603.02771",
  },
  {
    year: 2015,
    title: "Superradiance for atoms trapped along a photonic crystal waveguide",
    authors: "A Goban†, C-L Hung†, JD Hood†, S-P Yu†, JA Muniz, O Painter, and HJ Kimble",
    venue: {
      label: "Phys. Rev. Lett. 115, 063601 (2015)",
      href: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.115.063601",
    },
    arxiv: "https://arxiv.org/abs/1503.04503",
    note: "† equal contribution",
  },
  {
    year: 2014,
    title: "Atom–light interactions in photonic crystals",
    authors:
      "A Goban†, C-L Hung†, S-P Yu†, JD Hood†, JA Muniz†, JH Lee, MJ Martin, AC McClung, KS Choi, DE Chang, et al.",
    venue: {
      label: "Nature Communications 5 (2014)",
      href: "https://www.nature.com/articles/ncomms4808",
    },
    arxiv: "https://arxiv.org/abs/1312.3446",
  },
  {
    year: 2014,
    title:
      "Nanowire photonic crystal waveguides for single-atom trapping and strong light-matter interactions",
    authors:
      "S-P Yu†, JD Hood†, JA Muniz, MJ Martin, R Norte, C-L Hung, SM Meenehan, JD Cohen, O Painter, and HJ Kimble",
    venue: {
      label: "Applied Physics Letters 104(11), 111103 (2014)",
      href: "https://doi.org/10.1063/1.4868975",
    },
    arxiv: "https://arxiv.org/abs/1402.1147",
  },
  {
    year: 2012,
    title: "Enhancement of mechanical Q factors by optical trapping",
    authors: "K-K Ni, R Norte, DJ Wilson, JD Hood, DE Chang, O Painter, and HJ Kimble",
    venue: {
      label: "Phys. Rev. Lett. 108, 214302 (2012)",
      href: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.108.214302",
    },
    arxiv: "https://arxiv.org/abs/1201.1864",
  },
];

export function byYear(pubs: Pub[]) {
  const years = [...new Set(pubs.map((p) => p.year))].sort((a, b) => b - a);
  return years.map((year) => ({ year, items: pubs.filter((p) => p.year === year) }));
}
