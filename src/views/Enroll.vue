<template>
  <div class="container-fluid pt-6 pt-lg-7 mb-4">
    <div class="row">
      <div class="course-info">
        <div class="course-bg offset-md-2 col-md-8 offset-lg-6 col-lg-5">
          <h3 class="text-white">線上課程資訊</h3>
          <ul>
            <li>
              授課堂數 (共 10 堂)：
              <ul class="painting-lessons">
                <li>5 月/ 19、26</li>
                <li>6 月/ 02、09、16、23、30</li>
                <li class="mb-2">7 月/ 07、14、21</li>
              </ul>
            </li>
            <li>
              上課方式：
              <p>
                透過線上課程學習水彩，不受時間、空間與距離的限制。每個星期四，老師會將作業示範錄影分段
                po 在班上的 Line 群組；每個星期三進行個別作業檢討。
              </p>
            </li>
            <li>
              上課時間：
              <p>隨時可觀看錄影，不限次數永久存留。</p>
            </li>
            <li>
              報名方式：
              <p>
                請透過
                <a
                  href="https://www.facebook.com/leehsiaolin"
                  class="mb-3 text-decoration-none lh-1"
                  target="_blank"
                >
                  <i class="bi bi-facebook text-white fs-4"></i>
                </a>
                私訊，或加曉寧老師的 LINE ID：hsiaolinlee 聯繫報名。
              </p>
            </li>
            <li>課程費用：$6,500 (請於上課前匯款)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container mb-4">
    <div class="row">
      <div class="col-lg-6">
        <h3>課程內容</h3>
        <ol class="course-content">
          <li>水彩技法的訓練</li>
          <li>色彩的屬性與運用</li>
          <li>
            畫作整體的經營
            <ol class="course-detail">
              <li>題材的選擇</li>
              <li>主賓關係的建立</li>
              <li>色彩、結構、筆觸、技法的統整</li>
              <li>色彩的佈局</li>
              <li>透過虛實、聚散、疏密、濃淡的安排，營造律動的畫面</li>
              <li>空間關係的處理</li>
            </ol>
          </li>
          <li>
            習作內容
            <ol class="course-detail">
              <li>質感表現：石材、木質、鐵鏽</li>
              <li>特殊技法的使用</li>
              <li>複雜物的處理</li>
              <li>植物：花葉層次的表現及處理</li>
            </ol>
          </li>
        </ol>
      </div>
      <div class="col-lg-6 p-lg-0">
        <div class="chrysanthemum"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  color: $kimberly-dark;
  font-size: 1.5rem;
  margin-bottom: 20px;
}
h3 {
  color: $french-lilac-dark1;
  font-size: 1.25rem;
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
  font-size: 1rem;
  list-style-image: url('../assets/images/favicon-16x16.png');
}

.course-info {
  padding: 20px;
  background-image: url('../assets/images/bougainvillea.jpg');
  background-size: cover;
  background-position: center center;
  ul {
    margin-bottom: 0;
  }
  li {
    color: $white;
  }
  p {
    margin-bottom: 8px;
    color: $white;
  }
}
.course-bg {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
}

ul.painting-lessons {
  padding-left: 1.5rem;
  margin-left: 0;
  border: none;
  li {
    list-style-image: none;
  }
}
.chrysanthemum {
  border-radius: 10px;
  border: 1px solid $primary;
  height: 250px;
  background-size: cover;
  background-position: center center;
  background-image: url('../assets/images/chrysanthemum.jpeg');
  @media (min-width: 768px) {
    height: 400px;
  }
  @media (min-width: 992px) {
    height: 450px;
    margin-top: 44px;
  }
}
ol.course-content {
  padding-left: 2.5rem;
  list-style-type: cjk-ideographic;
  li {
    list-style-image: none;
  }
}
ol.course-detail {
  padding-left: 1.25rem;
}
</style>
