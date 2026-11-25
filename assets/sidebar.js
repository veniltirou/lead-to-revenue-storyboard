/* Collapsible sidebar sections for the Oracle CX Storyboard Series.
 * Every section starts collapsed except the one holding the current page,
 * plus "Getting Started" (the site map link) and "Connect".
 * Click or press Enter/Space on a section label to open or close it.
 * Without JavaScript the sidebar simply stays fully expanded. */
(function () {
  var css =
    '.sidebar li.section-label{cursor:pointer;user-select:none}' +
    '.sidebar li.section-label::after{content:" \\25B8";opacity:.7}' +
    '.sidebar li.section-label.open::after{content:" \\25BE"}' +
    '.sidebar li.section-label:hover,.sidebar li.section-label:focus{color:#fff;outline:none}' +
    '.sidebar li.sb-hidden{display:none}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var ul = document.querySelector('.sidebar ul');
  if (!ul) return;

  var groups = [], current = null;
  Array.prototype.forEach.call(ul.children, function (li) {
    if (li.classList.contains('section-label')) {
      current = { label: li, items: [] };
      groups.push(current);
    } else if (current) {
      current.items.push(li);
    }
  });

  var alwaysOpen = ['Getting Started', 'Connect'];

  function setOpen(group, open) {
    group.label.classList.toggle('open', open);
    group.label.setAttribute('aria-expanded', open ? 'true' : 'false');
    group.items.forEach(function (li) { li.classList.toggle('sb-hidden', !open); });
  }

  groups.forEach(function (group) {
    var name = group.label.textContent.trim();
    var hasActive = group.items.some(function (li) { return li.querySelector('a.active'); });
    group.label.setAttribute('role', 'button');
    group.label.setAttribute('tabindex', '0');
    setOpen(group, hasActive || alwaysOpen.indexOf(name) !== -1);
    function toggle() { setOpen(group, !group.label.classList.contains('open')); }
    group.label.addEventListener('click', toggle);
    group.label.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
})();
