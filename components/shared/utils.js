
export const orderNumberDesc = (a, b) =>
  a > b ? -1 : b > a ? 1 : 0;
export const orderNumberAsc = (a, b) =>
  a > b ? 1 : b > a ? -1 : 0;
export const orderDateAsc = (date1, date2) => {
         const a = new Date(date1);
         const b = new Date(date2);
         return a > b ? -1 : a < b ? 1 : 0;
       };