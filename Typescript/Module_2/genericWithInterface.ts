// interface generic
{
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      manufactureDate: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface SmartWatch {
    brand: string;
    model: string;
    manufactureDate: number;
  }

  const poorDeveloper: Developer<SmartWatch, null> = {
    name: "Shakil Hossain",
    computer: {
      brand: "HP",
      model: "Pavilion",
      manufactureDate: 2021,
    },
    smartWatch: {
      brand: "Apple",
      model: "Watch Series 6",
      manufactureDate: 2021,
    },
  };

  type SmartWatch2 = {
    brand: string;
    model: string;
    manufactureDate: number;
    SSD: boolean;
    HDD: boolean;
  };

  type HarleyDevidSon = {
    brand: string;
    model: string;
    year: number;
  };
  const richDeveloper: Developer<SmartWatch2, HarleyDevidSon> = {
    name: "Rahim",
    computer: {
      brand: "Apple",
      model: "Macbook Pro",
      manufactureDate: 2021,
    },
    smartWatch: {
      brand: "Samsung",
      model: "Galaxy Watch",
      manufactureDate: 2021,
      SSD: true,
      HDD: true,
    },
    bike: {
      brand: "Harley-Davidson",
      model: "Cruiser",
      year: 2022,
    },
  };
}
