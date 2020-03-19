export class StatsConfig {
  static times = {
    Monthly: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
    ],
    Daily: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    Yearly: [
      '2015',
      '2016',
      '2017',
      '2018',
    ],
  };

  static timeFilters = {
    Monthly: [
      '2018',
      '2017',
      '2016',
      '2015',
    ],
    Daily: [
      '08/08/2018 - 08/15/2018',
      '08/15/2018 - 08/22/2018',
    ],
  };

  static timePeriods = [
    'Yearly',
    'Monthly',
    'Daily',
  ];

  static accountStatLabels = [
    'Cross Sale',
    'Stand Alone',
  ];

  static accountActivityLabels = [
    'Today',
    'This Week',
    'This Month',
  ];

  static randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max))
}
