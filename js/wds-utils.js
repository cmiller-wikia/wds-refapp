export function ancestorByClass(ele, className) {
  if (!ele || ele.classList.contains(className)) {
    return ele;
  } else if (ele.parentElement) {
    return ancestorByClass(ele.parentElement, className);
  } else {
    return null;
  }
}
