import Vue from "vue";
import ImgView from "./imgView.vue";
let imgView = Vue.extend(ImgView);

const el = document.createElement("div");

class UImgView {
  constructor(src: string) {
    document.body.appendChild(new imgView({ el, propsData: { src } }).$el);
  }
}

export const ViewImg = (src: string) => new UImgView(src);
