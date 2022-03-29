<template>
  <div class="container-fluid banner pt-5 px-4 d-flex align-items-center justify-content-between">
    <div class="description d-flex flex-column align-items-end">
      <p>
        畫筆下的「花」脫俗，篩去嬌媚，自展輕柔<br />
        畫筆下的「景」善美，引光入境，自說故事<br />
        畫筆下的「物」律動，流轉心情，自顯生命
      </p>
      <router-link to="/paintings" class="go-painting">前往創作</router-link>
    </div>
    <img class="painter" src="../assets/images/LeeHsiaoNing.jpeg" alt="Lee Hsiao Ning" />
  </div>
  <div class="container intro my-4">
    <ul class="intro-group row row-cols-1 row-cols-md-2 flex-row-reverse">
      <li class="col intro-image">
        <div class="hydrangea"></div>
      </li>
      <li class="col intro-text d-flex flex-column justify-content-center">
        <h2>台灣水彩畫家 - <br />李曉寧 Hsiao-Ning Lee</h2>
        <h3>出生</h3>
        <p>1959年台灣屏東</p>
        <h3>學歷</h3>
        <ul>
          <li>台北市立女師專音樂科畢業</li>
          <li>台北市立教育大學美勞教育系畢業</li>
        </ul>
      </li>
    </ul>
    <ul class="intro-group row row-cols-1 row-cols-md-2">
      <li class="col intro-image d-flex justify-content-end">
        <div class="egg"></div>
      </li>
      <li class="col intro-text d-flex flex-column justify-content-center">
        <h3>經歷</h3>
        <ul>
          <li>現任中華亞太水彩藝術協會理事</li>
          <li>臺灣水彩專題精選系列「春華」水彩大展策展人</li>
        </ul>
        <h3>簡歷</h3>
        <p>
          作品多次優選、佳作、入選於2015世界水彩大賽、全國美展、大墩美展、新北市美展、玉山美展、南瀛美展、新竹美展等。
        </p>
      </li>
    </ul>
    <ul class="intro-group row row-cols-1 row-cols-md-2 flex-row-reverse">
      <li class="col intro-image">
        <div class="pumpkin"></div>
      </li>
      <li class="col intro-text d-flex flex-column justify-content-center">
        <h3>個展</h3>
        <ul>
          <li>2018國父紀念館「初曉迎繽」水彩個展</li>
          <li>2015屏東縣政府文化處「歸心．似見」水彩個展</li>
          <li>2009臺北縣政府縣府藝廊李曉寧水彩個展</li>
          <li>2011臺中市立大墩文化中心「珍藏感動」水彩個展</li>
          <li>2009臺北市立社教館「花影入簾間」水彩個展⋯⋯(個展共十六次)</li>
        </ul>
      </li>
    </ul>
    <ul class="intro-group row row-cols-1 row-cols-md-2">
      <li class="col intro-image d-flex justify-content-center">
        <div class="wood-carving"></div>
      </li>
      <li class="col intro-text d-flex flex-column justify-content-center">
        <h3>聯展</h3>
        <ul>
          <li>2021 獲邀韓國水彩節仁川水彩大展</li>
          <li>2019 獲邀臺灣水彩專題精選系列「春華」水彩大展</li>
          <li>2016 獲邀「名家創作的赤裸告白─水彩解密2」</li>
          <li>2012 獲選「壯闊交響巨幅水彩創作大展」</li>
          <li>2011 獲選建國百年「台灣意象」水彩名家大展</li>
          <li>2011 獲選「臺灣風情印象100」水彩大展</li>
          <li>2010 獲選兩岸水彩名家交流展／中正紀念堂</li>
          <li>2009 獲選彩繪「馬祖列島百景之美」畫展⋯⋯(聯展共二十六次）</li>
        </ul>
      </li>
    </ul>
    <ul class="intro-group row row-cols-1 row-cols-md-2 flex-row-reverse">
      <li class="col intro-image d-flex justify-content-center">
        <div class="fish"></div>
      </li>
      <li class="col intro-text d-flex flex-column justify-content-center">
        <h3>著作</h3>
        <ul>
          <li>2018「美在生活‧心在說話」畫冊</li>
          <li>2011「珍藏感動」電子畫冊</li>
          <li>2009「全方位視覺藝術教學」（雄獅美術出版）</li>
          <li>2009「花影入簾間」李曉寧水彩畫冊</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background-image: url('../assets/images/hydrangea.jpg');
  background-size: cover;
  background-position: center center;
  height: calc(100vh);
}
.banner {
  position: relative;
}
.painter {
  position: absolute;
  border: 3px solid $white;
  bottom: 70px;
  right: 70px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.description {
  background: rgba(0, 0, 0, 0.35);
  padding: 60px;
  color: $white;
  writing-mode: vertical-lr;
  letter-spacing: 5px;
  p {
    font-size: 24px;
    line-height: 1.6;
  }
}
.go-painting {
  font-size: 18px;
  text-decoration: none;
  writing-mode: vertical-lr;
  letter-spacing: 5px;
  background-color: $martinique;
  color: $white;
  padding: 12px 6px;
  border: 2px solid #fff;
  border-radius: 5px;
  :hover {
    color: $white;
    background-color: $martinique-light2;
  }
}

.intro-group {
  display: flex;
  list-style: none;
}
.intro-image {
  div {
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
  }
  .hydrangea {
    background-image: url('../assets/images/hydrangea2.jpg');
    height: 300px;
    width: 300px;
    border: 3px solid $kimberly;
  }
  .egg {
    background-image: url('../assets/images/egg.jpg');
    height: 350px;
    width: 350px;
    border: 4px solid $kimberly-dark;
  }

  .pumpkin {
    background-image: url('../assets/images/pumpkin.jpg');
    height: 400px;
    width: 400px;
    border: 5px solid $french-lilac-dark1;
  }

  .wood-carving {
    background-image: url('../assets/images/wood-carving.jpg');
    height: 300px;
    width: 300px;
    border: 3px solid $french-lilac-dark2;
  }

  .fish {
    background-image: url('../assets/images/fish.jpg');
    height: 350px;
    width: 350px;
    border: 4px solid $french-lilac;
  }
}
.intro-text {
  width: 40%;
  h2 {
    color: $kimberly-dark;
    font-size: 24px;
  }
  h3 {
    color: $french-lilac-dark1;
    font-size: 20px;
  }
  p,
  li {
    color: $martinique-light2;
    font-size: 18px;
  }
}
@media (max-width: 768px) {
  .painter {
    bottom: 30px;
    right: 30px;
    width: 150px;
    height: 150px;
  }
  .intro-text {
    width: 100%;
  }
}
</style>
