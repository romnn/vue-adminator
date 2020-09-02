export const addHours = (date: Date, hours: number) => {
  return new Date(date.setHours((date.getHours() + hours) % 24));
};

export const addMinutes = (date: Date, minutes: number) => {
  return new Date(date.setMinutes((date.getMinutes() + minutes) % 60));
};

export const timeSinceMsec = (date1: Date, date2: Date) => {
  if (date2 < date1) {
    date2.setDate(date2.getDate() + 1);
  }
  return date2.getUTCMilliseconds() - date1.getUTCMilliseconds();
};

export const timeSincePretty = (date1: Date, date2: Date) => {
  let msec = timeSinceMsec(date1, date2);
  const hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  const mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  const ss = Math.floor(msec / 1000);
  msec -= ss * 1000;
  return {
    hrs: hh,
    min: mm,
    sec: ss,
    msec: msec
  };
};

export const loremIpsum = () => {
  return "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed \
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco  \
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute \
                  irure dolor in reprehenderit in voluptate velit esse cillum \
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
                  cupidatat non proident, sunt in culpa qui officia deserunt \
                  mollit anim id est laborum.";
};
