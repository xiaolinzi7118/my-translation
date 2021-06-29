Component({
  data: {
    selected: 0,
    color: "#005377",
    selectedColor: "#fff",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/assets/images/f.png",
      selectedIconPath: "/assets/images/f2.png",
      text: "翻译"
    }, {
      pagePath: "/pages/history/history",
      iconPath: "/assets/images/h.png",
      selectedIconPath: "/assets/images/h2.png",
      text: "历史"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})