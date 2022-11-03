/**
 * Phone clear from symbols and replace 8 to 7
 * @param phone
 * @returns {*}
 */

export const clearPhone = (phone) => {
  let preparedPhone = phone.replace(/\D+/g, "")

  if (preparedPhone.substring(0, 1) === '8') {
    preparedPhone = preparedPhone.split('')
    preparedPhone[0] = 7;
    preparedPhone = preparedPhone.join('')
  }
  return preparedPhone
}

export const isEmail = (data) => {
  return data.length > 0 && data.includes('@')
}

export const pluralize = function (count, words) {
  const cases = [2, 0, 1, 1, 1, 2];
  return count + ' ' + words[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[Math.min(count % 10, 5)]];
}

export const scrollToElementById = (elementId, args) => {
  const el = document.getElementById(elementId);
  if(el){
    el.scrollIntoView({...args});
  }
}
export const isNumber = function (e) {
  e = (e) || window.event;
  const charCode = (e.which) ? e.which : e.keyCode;
  if ((charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105)) && charCode !== 46) {
    return false
  } else {
    return true
  }
}
export const jsDateToMySql = function (date) {
  if (!date) return '';
  return date.toISOString().slice(0, 10);
};

export const mySqlDateToJs = function (date) {
  if (!date) return null;
  return new Date(date);
};

