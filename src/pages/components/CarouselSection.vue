<template>
  <div class="section" id="carousel">
    <div class="container">
      <div class="title">
        <h4>样例展示</h4>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <el-carousel height="500px">
            <el-carousel-item>
              <img class="d-block" src="img/bgd1.jpg" alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Nature, United States</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/bgd2.jpg" alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Somewhere Beyond, United States</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/bgd3.jpg" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Yellowstone National Park, United States</h5>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui';

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
};
</script>
<style></style>
