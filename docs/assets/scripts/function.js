"use strict";

function doWhenIntersect(entries) {
  // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      activateIndex(entry.target);
    }
  });
}

function activateIndex(els) {
  // すでにアクティブになっている目次を選択
  var currentActiveIndex = document.querySelector("#indexList .is-active"); // すでにアクティブになっているものが0個の時（=null）以外は、activeクラスを除去

  if (currentActiveIndex !== null) {
    currentActiveIndex.classList.remove("is-active");
  } // 引数で渡されたDOMが飛び先のaタグを選択し、activeクラスを付与


  var newActiveIndex = document.querySelector("a[href='#".concat(els.id, "']"));
  newActiveIndex.classList.add("is-active");
}

$(function () {
  var e = document.querySelectorAll(".js-rellax");
  Array.prototype.slice.call(e).forEach(function (e) {
    var r = new Rellax(e, {
      relativeToWrapper: !0,
      wrapper: e.parentElement
    });
    window.addEventListener("scroll", function () {
      r.refresh();
    });
  });
});