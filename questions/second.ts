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

const resorts: IResort[] = [...new Array(1000)]; // just an array;
const travelMethods = ['train', 'plane'];

const calculatePriceByTravelMethod = (resortsArr: IResort[]) => {
  const map: Record<string, any> = {};

  resortsArr.forEach((r) => {
    const { name, price, travelMethod } = r;

    if (!travelMethods.includes(travelMethod)) {
      return;
    }

    const resort = map[name];

    if (resort) {
      resort[travelMethod] = resort[travelMethod]
        ? resort[travelMethod] + price
        : 0;
    } else {
      map[name] = {};
    }
  });

  return map;
};
