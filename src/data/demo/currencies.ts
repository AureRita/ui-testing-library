import FakerCurrency from '@data/faker/currency';

export default {
  euro: new FakerCurrency({
    name: 'Euro',
    frName: 'euro',
    symbol: '€',
    isoCode: 'EUR',
    exchangeRate: 1,
    decimals: 2,
    enabled: true,
  }),
  mad: new FakerCurrency({
    name: 'Moroccan Dirham',
    frName: 'dirham marocain',
    symbol: 'MAD',
    isoCode: 'MAD',
    exchangeRate: 10.560000,
    decimals: 2,
    enabled: true,
  }),
  toman: new FakerCurrency({
    name: 'Iranian toman',
    frName: 'Toman iranien',
    symbol: 'TMN',
    isoCode: 'TMN',
    exchangeRate: 4666.539,
    decimals: 2,
    enabled: true,
  }),
  chileanPeso: new FakerCurrency({
    name: 'Chilean Peso',
    frName: 'peso chilien',
    symbol: '$',
    isoCode: 'CLP',
    exchangeRate: 862.172868,
    decimals: 0,
    enabled: true,
  }),
  dzd: new FakerCurrency({
    name: 'Algerian Dinar',
    frName: 'dinar algérien',
    symbol: 'DZD',
    isoCode: 'DZD',
    exchangeRate: 162.6,
    decimals: 2,
    enabled: true,
  }),
  tnd: new FakerCurrency({
    name: 'Tunisian Dinar',
    frName: 'dinar tunisien',
    symbol: 'TND',
    isoCode: 'TND',
    exchangeRate: 3.29,
    decimals: 3,
    enabled: true,
  }),
  try: new FakerCurrency({
    name: 'Turkish Lira',
    frName: 'livre turque',
    symbol: '₺',
    isoCode: 'TRY',
    exchangeRate: 9.08,
    decimals: 2,
    enabled: true,
  }),
  usd: new FakerCurrency({
    name: 'US Dollar',
    frName: 'dollar des États-Unis',
    symbol: '$',
    isoCode: 'USD',
    exchangeRate: 1.22,
    decimals: 2,
    enabled: true,
  }),
  aed: new FakerCurrency({
    name: 'United Arab Emirates Dirham',
    frName: 'dirham des Émirats arabes unis',
    symbol: 'AED',
    isoCode: 'AED',
    exchangeRate: 4.51,
    decimals: 2,
    enabled: true,
  }),
  lyd: new FakerCurrency({
    name: 'Libyan Dinar',
    frName: 'dinar libyen',
    symbol: 'LYD',
    isoCode: 'LYD',
    exchangeRate: 5.45,
    decimals: 3,
    enabled: true,
  }),
  lsl: new FakerCurrency({
    name: 'Lesotho Loti',
    frName: 'loti lesothan',
    symbol: 'LSL',
    isoCode: 'LSL',
    exchangeRate: 18.06,
    decimals: 2,
    enabled: true,
  }),
  all: new FakerCurrency({
    name: 'Albanian Lek',
    frName: 'lek albanais',
    symbol: 'ALL',
    isoCode: 'ALL',
    exchangeRate: 123.38,
    decimals: 0,
    enabled: true,
  }),
  gbp: new FakerCurrency({
    name: 'British Pound',
    frName: 'livre sterling',
    symbol: 'GBP',
    isoCode: 'GBP',
    exchangeRate: 0.87,
    decimals: 2,
    enabled: true,
  }),
  jpy: new FakerCurrency({
    name: 'Japanese Yen',
    frName: 'yen japonais',
    symbol: 'JPY',
    isoCode: 'JPY',
    exchangeRate: 140.59,
    decimals: 0,
    enabled: true,
  }),
  pyg: new FakerCurrency({
    name: 'Paraguayan Guarani',
    frName: 'guaraní paraguayen',
    symbol: 'PYG',
    isoCode: 'PYG',
    exchangeRate: 7942.22,
    decimals: 0,
    enabled: true,
  }),
};
