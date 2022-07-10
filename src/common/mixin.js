import {debouce} from './utils'
import BackTop from "components/content/backTop/BackTop"
import {BACK_POSITION} from "common/const"


export const itemListenerMixin = {
  data() {
    return {
      itemImgListener:null
    }
  },
  mounted() {
    let newRefresh = debouce(this.$refs.scroll.refresh,100)
    this.itemImgListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener)
    // console.log('我是mixin')
  }
}

export const backTopMixin = {
  components:{
    BackTop,
  },
  data() {
    return {
      isShowBackTop:false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0,0,300)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > BACK_POSITION
    }
  },
}