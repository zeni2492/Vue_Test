<template>
  <body @click.self="closePopup">
     <div class="MainPage">  <!--//Ссылка на вторую страницу -->
            <router-link class="Link" to="/about">Перейти на страницу "About"</router-link>
    </div>
      <div>
        <div>
          <div class="btnContainer"> <!--Кнопка открытия поп апа путем изменения переменой isPopupOpen на true -->
            <button class="Popbtn" @click="openPopup">Open</button>
          </div>
          <div v-if="isPopupOpen" class="popup"> <!-- Сам поп ап в который переданны пропсы --> 
            <Create_post :is-popup-open="isPopupOpen" @close="closePopup" @CreatePost="CreateForm" />
          </div>
        </div>

        <div v-if="Posts.length === 0"> <!-- Условие проверяющее наличие постов --> 
          <h3 style="text-align: center; margin-top: 10px;">No Info</h3>
        </div>

        <div style="width: 100%;margin-top: 10px;" v-else> <!-- Компонент отображающий посты в который передан пустой массив Posts  --> 
          <post_list :Posts="Posts" />
        </div>
      </div>
  </body>
</template>

<script>
import post_list from "@/components/PostList.vue";
import Create_post from "@/components/CreatePost.vue";

export default {
  components: {
    Create_post,
    post_list,
  },
  data() {
    return {
      Posts: [],
      id: Date.now(),
      isPopupOpen: false,
    };
  },
  methods: {
    CreateForm(post) {
      this.Posts.unshift(post);
    },
    openPopup() {
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}


body {
  background-color: rgb(235, 235, 235);
  width: 100%;
  height: 100vh;
}

.btnContainer{
  display: flex;
  justify-content: center;
  align-items: center;
}

.Popbtn {

  width: 70px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>