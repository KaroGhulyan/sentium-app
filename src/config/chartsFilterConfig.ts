import { DefaultOptionInterface } from '../interfaces/interfaces'

export enum MonthTypes {
  All = 'All',
  JAN = 'Jan',
  FEB = 'Feb',
  MAR = 'Mar',
  APR = 'Apr',
  MAY = 'May',
  JUN = 'Jun',
  JUL = 'Jul',
  AUG = 'Aug',
  SEP = 'Sep',
  OCT = 'Oct',
  NOV = 'Nov',
  DEC = 'Dec',
}

export const PeriodsList: DefaultOptionInterface[] = [
  {
    id: MonthTypes.All,
    name: MonthTypes.All,
  },
  {
    id: MonthTypes.JAN,
    name: MonthTypes.JAN,
  },
  {
    id: MonthTypes.FEB,
    name: MonthTypes.FEB,
  },
  {
    id: MonthTypes.MAR,
    name: MonthTypes.MAR,
  },
  {
    id: MonthTypes.APR,
    name: MonthTypes.APR,
  },
  {
    id: MonthTypes.JUN,
    name: MonthTypes.JUN,
  },
  {
    id: MonthTypes.JUL,
    name: MonthTypes.JUL,
  },
  {
    id: MonthTypes.AUG,
    name: MonthTypes.AUG,
  },
  {
    id: MonthTypes.SEP,
    name: MonthTypes.SEP,
  },
  {
    id: MonthTypes.OCT,
    name: MonthTypes.OCT,
  },
  {
    id: MonthTypes.NOV,
    name: MonthTypes.NOV,
  },
  {
    id: MonthTypes.DEC,
    name: MonthTypes.DEC,
  },
  {
    id: MonthTypes.All,
    name: MonthTypes.All,
  },
]
