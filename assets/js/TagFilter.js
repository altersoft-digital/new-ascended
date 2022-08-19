class TagFilter {
  // 1. describe and create/initiate our object
  constructor() {
    if (document.querySelector(".btn-tag")) {
      this.allTagBtnEl = document.querySelectorAll(".btn-tag");

      this.events();
    }
  }
  // 2. events
  events() {
    Array.prototype.forEach.call(this.allTagBtnEl, (item) => {
      item.addEventListener("click", () => this.FiltProduct(item));
    });
  }
  // 3. methods (function, action...))
  FiltProduct(btn) {
    btn.classList.toggle("tag-active");
    this.allActiveBtnEl = document.querySelectorAll(".tag-active");
    this.allProductEl = document.querySelectorAll(".our-product");
    this.loadMoreEl = document.querySelector(".btn-see-more");
    let empty = 0;

    for (let i = 0; i < this.allActiveBtnEl.length; ++i) {
      if (this.allActiveBtnEl[i].value == "") {
        ++empty;
      }
    }

    let filterproduct = 0;
    if (!btn.classList.contains("tag-active")) {
      Array.prototype.forEach.call(this.allProductEl, (item) => {
        if (empty === 0 && empty === this.allActiveBtnEl.length) {
          filterproduct++;
          if (filterproduct <= 6) {
            item.classList.remove("hidden-product");
          }
        } else {
          if (item.classList.contains(btn.dataset.tag)) {
            item.classList.add("hidden-product");
          }
        }
      });
    } else {
      Array.prototype.forEach.call(this.allProductEl, (item) => {
        item.classList.add("hidden-product");
        Array.prototype.forEach.call(this.allActiveBtnEl, (itembtn) => {
          if (item.classList.contains(itembtn.dataset.tag)) {
            filterproduct++;
            if (filterproduct <= 6) {
              item.classList.remove("hidden-product");
              item.classList.contains("hide-product")
                ? item.classList.remove("hide-product")
                : "";
            } else {
              item.classList.remove("hidden-product");
              !item.classList.contains("hide-product")
                ? item.classList.add("hide-product")
                : "";
            }
          }
        });
      });
    }

    this.allProductEl = document.querySelectorAll(".our-product");
    let isEven = 0;
    let amount = 0;
    Array.prototype.forEach.call(this.allProductEl, (item) => {
      item.style.marginTop = "0px";
      item.classList.contains("product-margin-top")
        ? item.classList.remove("product-margin-top")
        : "";
      let style = window.getComputedStyle(item);
      if (style.display !== "none") {
        isEven++;
        if (isEven % 2 == 0 && isEven != 0) {
          item.classList.add("product-margin-top");
        }
      }
      if (!item.classList.contains("hidden-product")) {
        amount++;
      }
    });
    if (amount < 7) {
      this.loadMoreEl.classList.add("hide-see-products");
    } else {
      console.log(amount);
      this.loadMoreEl.classList.contains("hide-see-products")
        ? this.loadMoreEl.classList.remove("hide-see-products")
        : "";
    }
  }
}

const tagfilter = new TagFilter();
