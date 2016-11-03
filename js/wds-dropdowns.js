const cls_dropdown = "wds-dropdown"
const cls_active = "wds-is-active"
const selector_dropdown = "." + cls_dropdown;

function closeAllBut(ele) {
  var dds = document.querySelectorAll(selector_dropdown);
  for (var i = 0, l = dds.length; i < l; i++) {
    if (dds[i] != ele) {
      dds[i].classList.remove(cls_active);
    }
  }
}

function findDropdown(ele) {
  if (ele.classList.contains(cls_dropdown)) {
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
      dd.classList.toggle(cls_active);
      ev.stopPropagation();
    } else {
      closeAllBut(null);
    }
  });

  window.addEventListener("keydown", (ev) => {
    if (event.defaultPrevented) {
      return;
    }

    if (ev.key == "Escape" || ev.keyIdentifier == "U+001B") {
      closeAllBut(null);
    }
  });
}
