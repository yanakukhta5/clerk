<script>
import ContainerTitle from "../ContainerTitle.vue";
import Form from "../../../../../UI/Form.vue";
import Card from "@/UI/Card.vue";
import Toggle from "@/UI/Toggle.vue";
export default {
  components: { ContainerTitle, Form, Card, Toggle },
  data() {
    return {
      windowWidth: window.innerWidth,
      cards: [
        {
          time: "Перед рассветом",
          title: "Утренний бухгалтер",
          description:
            "Самые важные новости и события за день. Кратко, по делу, структурировано.",
          news: [
            {
              text: "Новости для бухгалтеров, ИП и директора",
            },
            {
              text: "Подборка статей за день",
            },
          ],
          clientsCount: 59342,
          img: {
            default: "/img/sendImages/day.png",
          },
          chosen: true,
        },
        {
          time: "После заката",
          title: "Ночной бухгалтер",
          description:
            "Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.",
          news: [
            {
              text: "Анализ, оценка и только самое главное",
            },
            {
              text: "Лучшие комменты юзеров в обзоре",
            },
          ],
          clientsCount: 37480,
          img: {
            default: "/img/sendImages/night.png",
          },
          chosen: false,
        },
        {
          time: "Раз в две недели",
          title: "Ножницы скидок",
          description:
            "Подборка самых выгодных и полезных спецпредложений от надежных компаний.",
          news: [
            {
              text: "Акции и скидки от лидеров рынка",
            },
            {
              text: "Те, кто подписался – экономят много денег ",
              additionMobile: '🤑'
            },
          ],
          clientsCount: 92118,
          img: {
            default: "/img/sendImages/scissors.png",
            mobile: "/img/sendImages/scissors-mobile.png"
          },
          chosen: false,
        },
        {
          time: "По мере появления анонсов",
          title: "Чемодан вебинаров",
          description:
            "Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.",
          news: [
            {
              text: "Никогда не пришлем платные вебинары",
              isImportant: true,
            },
            {
              text: `Подборка топовых тем для вебинаров`,
            },
          ],
          clientsCount: 92082,
          img: {
            default: "/img/sendImages/free.png",
            mobile: "/img/sendImages/free-mobile.png",
          },
          chosen: false,
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
  methods: {  
    onResize() {
      this.windowWidth = window.innerWidth
    },
    toggleChange(check, id) {
      this.cards[+id].chosen = check;
    },
  },
  computed: {
    isMobile(){
      return this.windowWidth < 576
    } 
  }
};
</script>

<template>
  <section class="send">
    <ContainerTitle class="card"
      >Выберите рассылки, которые подходят именно вам</ContainerTitle
    >
    <Form>
      <template v-slot:addition>
        <div class="cards">
          <Card v-for="(card, index) in cards" class="send-card">
            <template v-slot:default>
              <label>
                <img v-if="isMobile && card.img.mobile" :src="card.img.mobile" alt="Картинка опции" class="card-img"/>
                <img v-else :src="card.img.default" alt="Картинка опции" class="card-img"/>
                <p class="time">{{ card.time }}</p>
                <h2 class="title">{{ card.title }}</h2>
                <p class="description">{{ card.description }}</p>
                <ul class="list">
                  <li class="list-item" v-for="text in card.news">
                    <img
                      src="/img/check.svg"
                      alt="Это у нас гарантируется"
                      class="check"
                    />
                    <span :class="[{ important: text.isImportant }]">{{
                      text.text
                    }}
                    <span v-if="isMobile" class="mobile">{{ text.additionMobile }}</span>
                    </span>
                  </li>
                </ul>
                <div class="bottom">
                  <Toggle
                    :checked="card.chosen"
                    @toggleChange="toggleChange"
                    :id="index.toString()"
                    size="big"
                  />
                  <p>Уже получает {{ card.clientsCount }} человек</p>
                </div>
              </label>
            </template>
          </Card>
        </div>
      </template>
    </Form>
  </section>
</template>

<style scoped lang="scss">
.send {
  width: 100%;
  padding: 48px 24px;
  background-color: $tabBackground;
  &-card {
    @media (max-width: $md){
      width: 100%;
    }
  }
  @media (max-width: $sm){
    padding: 32px 16px;
  }
}
.cards {
  display: grid;
  margin-top: 36px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 24px;
  @media (max-width: $md) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
}
.card {
  position: relative;
}
.wrapper {
  max-width: 348px;
  padding-right: 20px;
}
.time {
  color: $bread;
  font-size: 13px;
  line-height: 16px;
}
.title {
  font-family: $secondaryFont;
  font-size: 20px;
  line-height: 28px;
  @media (max-width: $x) and (min-width: $lg) {
    line-height: 18px;
  }
  @media (max-width: $sm){
    text-align: left;
  }
}
.description {
  color: $secondaryFontColor;
  font-size: 14px;
  line-height: 20px;
  margin: 8px 0px 16px 0px;
  width: clamp(220px, 72%, 324px);
  @media (max-width: $lg) {
    margin-bottom: 6px;
    margin-top: 0px;
  }
}
.important {
  font-family: $secondaryFont;
  font-size: 16px;
}
.bottom {
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 8px;
}
.list-item {
  line-height: 20px;
  margin-bottom: 8px;
  display: flex;
  gap: 8px;
  @media (max-width: $md) {
    font-size: 14px;
  }
}
.card-img {
  width: 80px;
  height: 80px;
  position: absolute;
  right: 24px;
  @media (max-width: $big) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: $md) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: $compact){
    width: 100px;
    height: 100px;
  }
  @media (max-width: $sm) {
    width: 40px;
    height: 40px;
  }
}
</style>
