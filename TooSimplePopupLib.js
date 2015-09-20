(function() {
  var zIndex = 999999;
  window.TooSimplePopup = function() {
    var wi = document.createElement('div');
    var wiHead = document.createElement('div');
    var wiContainer = document.createElement('div');
    var wiFoot = document.createElement('div');

    wi.className = 'TooSimplePopup';
    wiHead.className = 'header';
    wiContainer.className = 'container';
    wiFoot.className = 'footer';

    wi.appendChild(wiHead);
    wi.appendChild(wiContainer);
    wi.appendChild(wiFoot);

    var wrapper = document.createElement('div');
    wrapper.style.background = 'rgba(0,0,0,0.5)';
    wrapper.style.zIndex = zIndex;
    wrapper.style.position = 'fixed';
    wrapper.style.left = '0px';
    wrapper.style.top = '0px';
    wrapper.style.height = '100%';
    wrapper.style.width = '100%';

    wrapper.appendChild(wi);
    document.body.appendChild(wrapper);
    var r = {
      title: function(text) {
        wiHead.innerHTML = text;
        return r;
      },
      content: function(callback) {
        callback(wiContainer);
        return r;
      },
      foot: function(callback) {
        callback(wiFoot);
        return r;
      },
      button: function(label, onclick) {
        var btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.innerHTML = label;
        btn.addEventListener('click', onclick);
        wiFoot.appendChild(btn);
        return r;
      },
      close: function() {
        wrapper.parentNode.removeChild(wrapper);
        return undefined;
      }
    };
    return r;
  };
})();
