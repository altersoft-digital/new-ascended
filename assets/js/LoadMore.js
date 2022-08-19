class LoadMore {
  // 1. describe and create/initiate our object
  constructor() {
    this.allProductEl = document.querySelectorAll(".our-product");
    let amount = 0;
    Array.prototype.forEach.call(this.allProductEl, (item) => {
      if (!item.classList.contains("hidden-product")) {
        amount++;
      }
    });
    if (amount < 7) {
      document
        .querySelector(".btn-see-more")
        .classList.add("hide-see-products");
    }
    if (document.querySelector(".btn-see-product")) {
      this.loadMoreBtn = document.querySelector(".btn-see-more");
      this.showLessBtn = document.querySelector(".btn-see-less");
      this.events();
    }
  }
  // 2. events
  events() {
    this.loadMoreBtn.addEventListener("click", () => this.LoadMorePosts());
    this.showLessBtn.addEventListener("click", () => this.ShowLess());
  }
  // 3. methods (function, action...))
  LoadMorePosts() {
    if (document.querySelectorAll(".hide-product").length != 0) {
      this.hiddenPosts = [...document.querySelectorAll(".hide-product")];
      this.hiddenPosts
        .splice(0, 6)
        .forEach((elem) => elem.classList.remove("hide-product"));
      if (document.querySelectorAll(".hide-product").length == 0) {
        this.loadMoreBtn.classList.add("hide-see-products");
        this.showLessBtn.classList.remove("hide-see-products");
      }
      this.allProductEl = document.querySelectorAll(".our-product");
      let isEven = 0;
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
      });
    } else {
      this.loadMoreBtn.classList.add("hide-see-products");
    }
  }
  ShowLess() {
    this.hiddenPosts = [...document.querySelectorAll(".our-product")];
    this.hiddenPosts
      .splice(6, this.hiddenPosts.length)
      .forEach((elem) => elem.classList.add("hide-product"));
    this.showLessBtn.classList.add("hide-see-products");
    this.loadMoreBtn.classList.remove("hide-see-products");
    this.allProductEl = document.querySelectorAll(".our-product");
    let isEven = 0;
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
    });
  }
}

const loadmore = new LoadMore();
