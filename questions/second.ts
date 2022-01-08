// JS solution:

// creating array of resorts
interface IResort {
  name: string;
  price: number;
  country: string;
  numberOfDays: number;
  travelMethod: string;
  holidayId: number | string;
}

type ICalculatedResult = Record<
  string,
  {
    [key: string]: number;
  }
>;

const travelMethods = ['train', 'plane'];

export const calculatePriceByTravelMethod = (resortsArr: IResort[]) => {
  const map: ICalculatedResult = {};

  resortsArr.forEach((r) => {
    const { name, price, travelMethod } = r;

    if (!travelMethods.includes(travelMethod)) {
      return;
    }

    const resort = map[name];

    if (resort) {
      resort[travelMethod] ??= 0;
      // resort[travelMethod] = resort[travelMethod] ? resort[travelMethod] : 0;
      resort[travelMethod] += price;
      return;
    }

    map[name] = {
      [travelMethod]: price
    };
  });

  return map;
};

const resortsFixture: IResort[] = [
  {
    name: 'string',
    price: 1000,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'train',
    holidayId: 0
  },
  {
    name: 'string',
    price: 1200,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'plane',
    holidayId: 0
  },
  {
    name: 'string',
    price: 1000,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'train',
    holidayId: 0
  },
  {
    name: 'string',
    price: 1200,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'plane',
    holidayId: 0
  },
  {
    name: 'string',
    price: 1000,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'train',
    holidayId: 0
  },
  {
    name: 'string',
    price: 1200,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'plane',
    holidayId: 0
  },
  {
    name: 'string',
    price: 1000,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'train',
    holidayId: 0
  },
  {
    name: 'string',
    price: 1200,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'plane',
    holidayId: 0
  },
  {
    name: 'string',
    price: 1000,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'train',
    holidayId: 0
  },
  {
    name: 'string',
    price: 1200,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'plane',
    holidayId: 0
  },
  {
    name: 'string',
    price: 1000,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'train',
    holidayId: 0
  },
  {
    name: 'string',
    price: 1200,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'plane',
    holidayId: 0
  },
  {
    name: 'string',
    price: 1200,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'not plane',
    holidayId: 0
  },
  {
    name: 'string',
    price: 1200,
    country: 'Random',
    numberOfDays: 10,
    travelMethod: 'not train',
    holidayId: 0
  }
];

console.log(calculatePriceByTravelMethod(resortsFixture));
