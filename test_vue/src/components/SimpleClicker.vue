<template>
    <div class="MainPage"> <!--//Ссылка на главную страницу -->
        <router-link class="Link" to="/">Перейти на главную страницу</router-link>
    </div>
    <div class="clicker"> <!-- контейнер игры  -->
    <h1>Кликер</h1>
    <div class="counter">
      <p>Количество кликов: </p>
      <p style="font-size: 40px;">{{ clicks }}</p><!-- счетчик кликов -->
    </div>
    <div class="upgrades">
      <div class="upgrade" v-if="upgrades.autoClicker">
        <h3>Автокликер</h3>
        <p>Улучшение автоматически увеличивает количество кликов каждую секунду.</p>
      </div>
      <div class="upgrade" v-if="upgrades.clickMultiplier">
        <h3>Умножатель кликов</h3>
        <p>Улучшение увеличивает количество кликов, когда вы нажимаете кнопку.</p>
      </div>
    </div>
    <div class="buttons">
      <button @click="click">Клик</button> <!-- Функция кнопки для активации функции клика -->
      <button @click="buyAutoClick">Купить автокликер</button> <!-- Функция кнопки для активации функции покупки автокликера  -->
      <button @click="buyBoost">Купить умножатель кликов</button> <!-- Функция кнопки для активации функции покупки умножателя кликов  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { //Изначальные значения переменных
      clicks: 0,
      upgrades: {
        autoClicker: false,
        clickMultiplier: false,
      },
    };
  },
  mounted() {
    this.startAutoClicker();
  },
  methods: {
    click() {
     if(this.upgrades.clickMultiplier){ // проверка условия на количество кликов для покупки множителя
        this.clicks += 2
     } else{
        this.clicks++
     }
    },
    buyAutoClick() { //покупка автоклика
        if(this.clicks === 10){
            this.upgrades.autoClicker = true
            this.startAutoClicker()
            this.clicks = 0
        }
    },
    buyBoost(){ //покупка умножателя
        if(this.clicks === 10){
            this.upgrades.clickMultiplier = true
            this.clicks = 0
        }
    },

    startAutoClicker() { // Запуск автоклика с 1 кликом в секунду
      if (this.upgrades.autoClicker) {
        setInterval(() => {
          this.clicks++;
        }, 1000);
      }
    },
  },
};
</script>

<style>
.MainPage {
    margin-bottom: 10px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.Link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #f1f1f1;
    color: #333;
    border: 1px solid #333;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s;
}

.Link:hover {
    background-color: #ccc
}

.clicker {
  text-align: center;
}

.counter {
  margin-bottom: 20px;
}

.upgrades {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
}

.upgrade {
  border: 1px solid #ccc;
  padding: 10px;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  margin-right: 10px;
}
</style>