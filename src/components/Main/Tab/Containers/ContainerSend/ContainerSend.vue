<script>
import ContainerTitle from '../ContainerTitle.vue'
import Form from './Form.vue'
import Card from '@/UI/Card.vue'
import Toggle from '@/UI/Toggle.vue'
export default {
 components: {ContainerTitle, Form, Card, Toggle},
 data(){
  return{
   cards: [
    {
     time: 'Перед рассветом',
     title: 'Утренний бухгалтер',
     description: 'Самые важные новости и события за день. Кратко, по делу, структурировано.',
     news: [ {
       text: 'Новости для бухгалтеров, ИП и директора'
      },
      {
       text: 'Подборка статей за день'
      }
     ],
     clientsCount: 59342,
     img: '/img/sendImages/day.png'
     },
    {
     time: 'После заката',
     title: 'Ночной бухгалтер',
     description: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
     news: [ {
       text: 'Анализ, оценка и только самое главное'
      },
      {
       text: 'Лучшие комменты юзеров в обзоре'
      }
     ],
     clientsCount: 37480,
     img: '/img/sendImages/night.png'
     },
     {
     time: 'Раз в две недели',
     title: 'Ножницы скидок',
     description: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
     news: [ {
       text: 'Акции и скидки от лидеров рынка'
      },
      {
       text: 'Те, кто подписался – экономят много денег '
      }
     ],
     clientsCount: 92118,
     img: '/img/sendImages/scissors.png'
     },
    {
     time: 'По мере появления анонсов',
     title: 'Чемодан вебинаров',
     description: 'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.',
     news: [ {
       text: 'Никогда не пришлем платные вебинары',
       isImportant: true
      },
      {
       text: `Подборка топовых тем для вебинаров`
      }
     ],
     clientsCount: 92082,
     img: '/img/sendImages/free.png'
     }

    ]
  }
 }
}
</script>

<template>
 <section class="send">
  <ContainerTitle class="card">Выберите рассылки, которые подходят именно вам</ContainerTitle>
  <Form />
  <div class="send-cards">
   <Card v-for="card in cards">
    <template v-slot:default>
     <img :src="card.img" alt="Картинка опции" class="card-img">
     <p class="time">{{ card.time }}</p>
     <h2 class="title">{{ card.title }}</h2>
     <p class="description">{{ card.description }}</p>
     <ul class="list">
     <li class="list-item" v-for="text in card.news">
      <img src="/img/check.svg" alt="Это у нас гарантируется" class="check">
      <span :class="[{important: text.isImportant}, list-text]">{{ text.text }}</span>
     </li>
     </ul>
     <div class="bottom">
     <Toggle size="big" />
     <p>Уже получает {{card.clientsCount}} человек</p>
     </div>
    </template>
   </Card>
  </div>
 </section>
</template>

<style scoped lang="scss">
.card {
  position: relative;
}
.wrapper {
  max-width: 348px;
  padding-right: 20px;
}
.time{
 color: $bread;
 font-size: 13px;
 line-height: 16px;
}
.title {
  font-family: $secondaryFont;
  font-size: 20px;
  line-height: 28px;
}
.description{
 color: $secondaryFontColor;
 font-size: 14px;
 line-height: 20px;
 margin: 8px 0px 16px 0px;
 max-width: 324px;
}
.important {
  font-family: $secondaryFont;
  font-size: 16px;
}
.bottom {
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 8px
}
 .send {
  width: 100%; 
  padding: 48px 24px;
  background-color: $tabBackground;
  &-cards{
   display: grid;
   height: 600px;
   margin-top: 36px;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(2, 1fr);
   grid-gap: 24px;
  }
 }
 .list-item {
  line-height: 20px;
  margin-bottom: 8px;
  display: flex;
  gap: 8px
 }
 .card-img {
  width: 80px;
  height: 80px;
  position: absolute;
  right: 24px;
 }
</style>