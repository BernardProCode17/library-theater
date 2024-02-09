function DateFormate(date) {

   const split = date.split('-')
   const toNumber = split.map((str) => Number(str))
   const newDate = new Date(toNumber)
   const formatte = newDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

   return formatte;
}

export default DateFormate