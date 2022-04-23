<template>
  <div class="container-fluid banner px-4 d-flex align-items-center mb-5">
    <div class="description">
      <p class="text-white">
        畫筆下的「花」脫俗，篩去嬌媚，自展輕柔<br />
        畫筆下的「景」善美，引光入境，自說故事<br />
        畫筆下的「物」律動，流轉心情，自顯生命
      </p>
      <RouterLink to="/paintings" class="go-painting text-white">前往創作</RouterLink>
    </div>
  </div>
  <div class="container my-4">
    <ul class="intro-group row flex-row-reverse">
      <li class="col-md-5 col-lg-6 intro-image">
        <div class="hydrangea"></div>
      </li>
      <li class="col-md-7 col-lg-5 intro-text d-flex flex-column">
        <h2 class="mt-3 mt-md-0">台灣水彩畫家 - <br />李曉寧 Hsiao-Ning Lee</h2>
        <h3>出生</h3>
        <p>1959 年台灣屏東</p>
        <h3>學歷</h3>
        <ul>
          <li>台北市立女師專音樂科畢業</li>
          <li>台北市立教育大學美勞教育系畢業</li>
        </ul>
      </li>
    </ul>
    <ul class="intro-group row">
      <li class="col-md-5 col-lg-6 intro-image">
        <div class="egg"></div>
      </li>
      <li class="col-md-7 col-lg-5 intro-text d-flex flex-column">
        <h3>經歷</h3>
        <ul class="mb-3">
          <li>現任中華亞太水彩藝術協會理事</li>
          <li>臺灣水彩專題精選系列「春華」水彩大展策展人</li>
        </ul>
        <h3>簡歷</h3>
        <p class="mb-0">
          作品多次優選、佳作、入選於2015世界水彩大賽、全國美展、大墩美展、新北市美展、玉山美展、南瀛美展、新竹美展等。
        </p>
      </li>
    </ul>
    <ul class="intro-group row flex-row-reverse">
      <li class="col-md-5 col-lg-6 intro-image">
        <div class="pumpkin"></div>
      </li>
      <li class="col-md-7 col-lg-5 intro-text d-flex flex-column">
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
    <ul class="intro-group row">
      <li class="col-md-5 col-lg-6 intro-image">
        <div class="wood-carving"></div>
      </li>
      <li class="col-md-7 col-lg-5 intro-text d-flex flex-column">
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
    <ul class="intro-group row flex-row-reverse">
      <li class="col-md-5 col-lg-6 intro-image">
        <div class="fish"></div>
      </li>
      <li class="col-md-7 col-lg-5 intro-text d-flex flex-column">
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
  <div class="painter-intro bg-info">
    <div class="container row py-4 px-0 mx-auto">
      <div class="col-md-4 col-lg-4 align-self-center d-flex justify-content-center mb-4">
        <img class="painter-icon" src="../assets/images/LeeHsiaoNing.jpeg" alt="LeeHsiaoNing" />
      </div>
      <div class="col-md-8 col-lg-4 self-intro mb-4">
        <h2>藝術家自述</h2>
        <p>美在生活．心在說話。</p>
        <p>我認真的生活，細細品味生命的精彩；面對每一次的創作，從心歸零，濾盡雜質見純粹。</p>
        <p>我用心地體會，時時享受心靈的豐美；真誠無偽下筆，從繁入簡，由濃趨淡尋剔透。</p>
        <p>眼和心，常被定格在複雜且多層次的景物中。</p>
        <p>一幅幅的作品，收藏了內心深處細膩的感動；水漂動、彩交織，一隻畫筆，心之顯影。</p>
      </div>
      <div class="col-lg-4 painting-style">
        <h2>創作理念</h2>
        <p>
          畫如其人，似有姿態，實則了然於心，不華麗的用色，不張狂的運筆，娓娓道出生活的明暗；
          循著每一幅畫，將探看我心的軌跡，以及無須言說的人生，幾番悲喜聚散與跌宕轉折，聆聽畫譜出一首首動人的生命樂章。
        </p>
        <p>
          期待透過豐富的層次及色彩，表現水彩的透明性與流動感，營造出虛實交錯的氛圍，將自身對音樂的感動融入於創作中，藉由作品傳達出對生命的愛與感動。
          真心、執著、感性、專注，拾起畫筆娓娓道出創作心境的軌跡。
          期待畫作不疾不徐的氣韻，緩緩傳遞平凡生活裡的真善美，尋見回歸內心平靜的喜樂。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// banner-start
.banner {
  position: relative;
  background-image: url('../assets/images/hydrangea.jpg');
  background-size: cover;
  background-position: center center;
  height: 100vh;
}
.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.35);
  padding: 40px;
  writing-mode: vertical-lr;
  letter-spacing: 3px;
  p {
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 0;
  }
}
.go-painting {
  align-self: flex-end;
  font-size: 1.25rem;
  text-decoration: none;
  writing-mode: vertical-lr;
  letter-spacing: 5px;
  background-color: $martinique-light2;
  padding: 12px 6px;
  border: 2px solid #fff;
  border-radius: 8px;
  &:hover {
    background-color: $martinique-light1;
  }
}
// banner-end

// intro-start
.intro-group {
  list-style: none;
  padding-left: 0;
  margin-bottom: 40px;
}
.intro-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  div {
    width: 300px;
    height: 300px;
    border: 3px solid $kimberly;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
  }
  .hydrangea {
    background-image: url('../assets/images/hydrangea2.jpg');
  }
  .egg {
    background-image: url('../assets/images/egg.jpg');
    border-color: $kimberly-dark;
  }
  .pumpkin {
    background-image: url('../assets/images/pumpkin.jpg');
    border-color: $french-lilac-dark1;
  }
  .wood-carving {
    background-image: url('../assets/images/wood-carving.jpg');
    border-color: $french-lilac-dark2;
  }
  .fish {
    background-image: url('../assets/images/fish.jpg');
    border-color: $french-lilac;
  }
}
.intro-text {
  h2 {
    color: $kimberly-dark;
    font-size: 1.75rem;
    margin-bottom: 20px;
  }
  h3 {
    color: $french-lilac-dark1;
    font-size: 1.5rem;
    border-bottom: 1px solid $french-lilac-dark1;
    padding-bottom: 0.5rem;
  }
  ul {
    border-left: 1px solid $kimberly-light;
    margin-left: 1.5rem;
  }
  p,
  li {
    color: $martinique-light2;
    font-size: 1.25rem;
    list-style-image: url('../assets/images/favicon-16x16.png');
  }
}
// intro-end

.painter-icon {
  width: 300px;
  height: 300px;
  border: 3px solid $white;
  border-radius: 50%;
}

.painter-intro {
  margin: 0 auto;
  h2 {
    color: $white;
    font-size: 1.75rem;
    border-bottom: 1px solid $french-lilac;
    padding-bottom: 5px;
  }
  p {
    font-size: 1.25rem;
    color: $white;
  }
}
.painting-style {
  p {
    text-indent: 2.5rem;
  }
}
@include media-breakpoint-up(sm) {
  // banner-start
  .description {
    padding: 50px;
    p {
      font-size: 1.5rem;
    }
  }
  .go-painting {
    font-size: 1.5rem;
  }
  // banner-end
}
@include media-breakpoint-up(md) {
  // banner-start
  .description {
    padding: 60px;
    margin-left: 15%;
    p {
      font-size: 1.75rem;
      letter-spacing: 5px;
    }
  }
  .go-painting {
    font-size: 1.75rem;
  }
  // banner-end
  .painter-icon {
    width: 250px;
    height: 250px;
  }
  .self-intro {
    padding-left: 30px;
  }
}
@include media-breakpoint-up(lg) {
  // intro-start
  .intro-text {
    ul {
      margin-left: 1.75rem;
    }
  }

  .intro-image {
    .egg {
      height: 350px;
      width: 350px;
      border-width: 4px;
    }
    .pumpkin {
      height: 400px;
      width: 400px;
      border-width: 5px;
    }
    .fish {
      height: 350px;
      width: 350px;
      border-width: 4px;
    }
  }
  // intro-end
  .painter-icon {
    width: 350px;
    height: 350px;
    border-width: 4px;
  }
  .self-intro {
    padding-left: 12px;
  }

  .painting-style {
    padding-left: 30px;
  }
}
</style>
