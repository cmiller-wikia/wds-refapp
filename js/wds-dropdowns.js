function dropdowns(ele) {
  return ele.querySelectorAll(".wds-dropdown");
}

function closeAllBut(ele) {
  var dds = dropdowns(document);
  for (var i = 0, l = dds.length; i < l; i++) {
    if (dds[i] != ele) {
      dds[i].classList.remove("wds-is-active");
    }
  }
}

function findDropdown(ele) {
  if (ele.classList.contains("wds-dropdown")) {
    return ele;
  } else if (ele.parentElement) {
    return findDropdown(ele.parentElement);
  } else {
    return null;
  }
}

export function init() {
  document.addEventListener('click', (ev) => {
    var dd = findDropdown(ev.target);
    if (dd) {
      closeAllBut(dd);
      dd.classList.toggle("wds-is-active");
      ev.stopPropagation();
    } else {
      closeAllBut(null);
    }
  });
}
