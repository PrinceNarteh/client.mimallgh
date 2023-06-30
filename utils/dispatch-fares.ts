export const fares: {
  [key: string]: {
    [key: string]: number;
  };
} = {
  uccCampus: {
    abura: 15.0,
    aburaNewTown: 15.0,
    aggrey: 20.0,
    akyim: 20.0,
    ankafulFie: 20.0,
    ankafulPrisons: 25.0,
    amissahEkyire: 20.0,
    bessakrom: 20.0,
    bonkus: 20.0,
    brafoyaw: 20.0,
    capeCoastTown: 12.0,
    cctu: 15.0,
    ekon: 20.0,
    eguaase: 25.0,
    elmina: 25.0,
    essuekyire: 15.0,
    greenHill: 20.0,
    holyChild: 15.0,
    kakumdo: 15.0,
    komenda: 40.0,
    moree: 25.0,
    mempeasemBarrier: 25.0,
    nkanfoa: 20.0,
    pedu: 10.0,
    siwdo: 0.0,
    uccCampus: 6.0,
    wiamoa: 20.0,
    yamoransa: 35.0,
  },
  abura: {
    capeCoastTown: 12.0,
    pedu: 0,
  },
  aburaNewTown: {},
  adisadel: {
    capeCoastTown: 0,
  },
  aggrey: {},
  akotokyir: {
    capeCoastTown: 0,
    uccCampus: 0,
  },
  akyim: {},
  ankafulFie: {},
  ankafulPrisons: {},
  amissahEkyire: {},
  bessakrom: {},
  bonkus: {},
  brafoyaw: {},
  capeCoastTown: {
    kakumdo: 0,
  },
  cctu: {},
  ekon: {},
  eguaase: {},
  elmina: {
    elmina: 0,
  },
  essuekyire: {},
  greenHill: {},
  holyChild: {},
  kakumdo: {},
  komenda: {},
  moree: {},
  mempeasemBarrier: {},
  nkanfoa: {},
  pedu: {
    capeCoastTown: 0,
  },
  siwdo: {
    abura: 0,
    capeCoastTown: 0,
  },
  wiamoa: {},
  yamoransa: {},
};

export const towns = [
  { label: "Abura", value: "abura" },
  { label: "Abura New Town", value: "aburaNewTown" },
  { label: "Adisadel", value: "adisadel" },
  { label: "Aggrey", value: "aggrey" },
  { label: "Akotokyir", value: "akotokyir" },
  { label: "Akyim", value: "akyim" },
  { label: "Ankaful Fie", value: "ankafulFie" },
  { label: "Ankaful Prisons", value: "ankafulPrisons" },
  { label: "Amissah Ekyire", value: "amissahEkyire" },
  { label: "Bessakrom", value: "bessakrom" },
  { label: "Bonkus", value: "bonkus" },
  { label: "Brafoyaw", value: "brafoyaw" },
  { label: "Cape Coast Town", value: "capeCoastTown" },
  { label: "CCTU", value: "cctu" },
  { label: "Ekon", value: "ekon" },
  { label: "Eguaase", value: "eguaase" },
  { label: "Elmina", value: "elmina" },
  { label: "Essuekyire", value: "essuekyire" },
  { label: "Green Hill", value: "greenHill" },
  { label: "Holy Child", value: "holyChild" },
  { label: "Kakumdo", value: "kakumdo" },
  { label: "Komenda", value: "komenda" },
  { label: "Moree", value: "moree" },
  { label: "Mempeasem Barrier", value: "mempeasemBarrier" },
  { label: "Nkanfoa", value: "nkanfoa" },
  { label: "Pedu", value: "pedu" },
  { label: "Siwdo", value: "siwdo" },
  { label: "UCC Campus", value: "uccCampus" },
  { label: "Wiamoa", value: "wiamoa" },
  { label: "Yamoransa", value: "yamoransa" },
];
export const getDeliveryFare = (from: string, to: string) =>
  fares[from][to] ? fares[from][to] : 0;

export const mapTownValueToLabel = (value: string) =>
  towns.find((item) => item.value === value)?.label || "";

export const mapTownLabelToValue = (label: string) =>
  towns.find((item) => item.label === label)?.value || "";

// *DISPATCH FARES*

// UCC to UCC CAMPUS- 6.00ghc

// UCC to TOWN -12ghc

// UCC to CCTU CAMPUS-15.00ghc

// UCC to BESSAKROM - 20.00ghc

// UCC to WIAMOA -20.00ghc

// UCC to BONKUS- 20.00ghc

// UCC to Amissah Ekyire - 20ghc

// UCC to ESSUEKYI- 15.00ghc

// UCC to GREEN HILL - 20.00ghc

// UCC to HOLY CHILD -15.00ghc

// UCC to AKYIM -20.00ghc

// UCC to BRAFOYAW-20.00ghc

// UCC to AGGREY- 20.00ghc

// UCC to MEMPEASEM BARRIER-25

// UCC to NKANFOA-20.00ghc

// UCC to ANKAFUL PRISONS-.25.00ghc

// UCC to ANKAFUL FIE - 20.00 Ghc

// UCC to EKON-20.00ghc

// UCC to MOREE - 25.00ghc

// UCC to ELMINA-25.00ghc

// UCC to KOMENDA- 40.00ghc

// UCC to EGUAASE -25.00ghc

// UCC to ABURA - 15.00 ghc

// UCC to ABURA NEW TOWN - 15 GHC

// UCC to PEDU - 10 GHC

// UCC to KAKUMDO - 15 GHC

// UCC to YAMORANSA -35. 00ghc

// UCC to SIWDO-

// ELMINA to ELMINA -

// PEDU to TOWN -

// ADISADEL to TOWN -

// ABURA to TOWN -

// TOWN to KAKUMDO -

// ABURA to PEDU -

// SIWDO to TOWN -

// SIWDO to ABURA -

// AKOTOKYIR to UCC -

// AKOTOKYIR to TOWN -
