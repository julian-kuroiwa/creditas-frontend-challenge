import { differenceInYears } from 'date-fns'

export const getAgeByBirthDate = (birthdate: string) =>
  differenceInYears(new Date(), new Date(birthdate))
