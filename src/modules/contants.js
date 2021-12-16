export const STEP = {
  HOME: 'home',
  NOTIFICATION: 'notification',
  COUPONS: 'coupons',
  USER: 'user'
}

export const COUPONS = [
  {
    type: 'Petrol',
    items: [
      {
        coin: 15,
        description: '50% discount for every $100 top-up on your Shell Petrol Card',
        img: '/images/pentrol-frame-1.png',
        insufficient: true
      },
      {
        coin: 1000,
        description: '70% discount top-up on your Shell Petrol Card',
        img: '/images/pentrol-frame-1.png',
        insufficient: false
      },
      {
        coin: 1000,
        description: '70% discount top-up on your Shell Petrol Card',
        img: '/images/pentrol-frame-1.png',
        insufficient: false
      }
    ]
  },
  {
    type: 'Rental Rebate',
    items: [
      {
        coin: 20,
        description: 'Get $20 Rental rebate',
        img: '/images/rental-frame-1.png',
        insufficient: true
      },
      {
        coin: 15,
        description: 'Get $500 Rental rebate',
        img: '/images/rental-frame-1.png',
        insufficient: true
      },
      {
        coin: 1000,
        description: '70% discount top-up on your Shell Petrol Card',
        img: '/images/rental-frame-1.png',
        insufficient: false
      }
    ]
  },
  {
    type: 'Food and Beverage',
    items: [
      {
        coin: 25,
        description: 'NTUC Fairprice $50 Voucher',
        img: '/images/food-frame-1.png',
        insufficient: true
      },
      {
        coin: 5,
        description: 'Free Cold Stone Sundae at any flavour!',
        img: '/images/food-frame-1.png',
        insufficient: false
      },
      {
        coin: 1000,
        description: '70% discount top-up on your Shell Petrol Card',
        img: '/images/food-frame-1.png',
        insufficient: false
      }
    ]
  }
]