<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <featrue-view></featrue-view>
    <ul>
      <li>李太白1</li>
      <li>李太白2</li>
      <li>李太白3</li>
      <li>李太白4</li>
      <li>李太白5</li>
      <li>李太白6</li>
      <li>李太白7</li>
      <li>李太白8</li>
      <li>李太白9</li>
      <li>李太白10</li>
      <li>李太白11</li>
      <li>李太白12</li>
      <li>李太白13</li>
      <li>李太白14</li>
      <li>李太白15</li>
      <li>李太白16</li>
      <li>李太白17</li>
      <li>李太白18</li>
      <li>李太白19</li>
      <li>李太白20</li>
      <li>李太白21</li>
      <li>李太白22</li>
      <li>李太白23</li>
      <li>李太白24</li>
      <li>李太白25</li>
      <li>李太白26</li>
      <li>李太白27</li>
      <li>李太白28</li>
      <li>李太白29</li>
      <li>李太白30</li>
      <li>李太白31</li>
      <li>李太白32</li>
      <li>李太白33</li>
      <li>李太白34</li>
      <li>李太白35</li>
      <li>李太白36</li>
      <li>李太白37</li>
      <li>李太白38</li>
      <li>李太白39</li>
      <li>李太白40</li>
      <li>李太白41</li>
      <li>李太白42</li>
      <li>李太白43</li>
      <li>李太白44</li>
      <li>李太白45</li>
      <li>李太白46</li>
      <li>李太白47</li>
      <li>李太白48</li>
      <li>李太白49</li>
      <li>李太白50</li>
      <li>李太白51</li>
      <li>李太白52</li>
      <li>李太白53</li>
      <li>李太白54</li>
      <li>李太白55</li>
      <li>李太白56</li>
      <li>李太白57</li>
      <li>李太白58</li>
      <li>李太白59</li>
      <li>李太白60</li>
      <li>李太白61</li>
      <li>李太白62</li>
      <li>李太白63</li>
      <li>李太白64</li>
      <li>李太白65</li>
      <li>李太白66</li>
      <li>李太白67</li>
      <li>李太白68</li>
      <li>李太白69</li>
      <li>李太白70</li>
      <li>李太白71</li>
      <li>李太白72</li>
      <li>李太白73</li>
      <li>李太白74</li>
      <li>李太白75</li>
      <li>李太白76</li>
      <li>李太白77</li>
      <li>李太白78</li>
      <li>李太白79</li>
      <li>李太白80</li>
      <li>李太白81</li>
      <li>李太白82</li>
      <li>李太白83</li>
      <li>李太白84</li>
      <li>李太白85</li>
      <li>李太白86</li>
      <li>李太白87</li>
      <li>李太白88</li>
      <li>李太白89</li>
      <li>李太白90</li>
      <li>李太白91</li>
      <li>李太白92</li>
      <li>李太白93</li>
      <li>李太白94</li>
      <li>李太白95</li>
      <li>李太白96</li>
      <li>李太白97</li>
      <li>李太白98</li>
      <li>李太白99</li>
      <li>李太白100</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComponents/HomeSwiper"
import RecommendView from "./childComponents/RecommendView.vue"
import FeatrueView from "./childComponents/FeatureView.vue"

import { getHomeMultidata } from "network/home";

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatrueView
  },

  Swipername: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      // console.log(res);
      // this.result = res
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
#home{
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>