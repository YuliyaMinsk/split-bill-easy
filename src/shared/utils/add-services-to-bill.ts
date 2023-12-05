import { Dish, PayerDishes, Service } from '../types';

const addServiceToBill = (data: PayerDishes, services: Service[], baseTotalPrice: number): PayerDishes => {
  services.forEach((service) => {
    const { value, name, type } = service;
    if (value > 0) {
      const serviceCharge: Dish = {
        id: `service-${name}`,
        name: name,
        price: type === 'add' ? baseTotalPrice * (value / 100) : -baseTotalPrice * (value / 100),
        quantity: 1,
      };
      data.dishes.push(serviceCharge);
    }
  });

  return data;
};

export { addServiceToBill };
