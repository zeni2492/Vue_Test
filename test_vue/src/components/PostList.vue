<template>
  <h2 style="text-align: center;">Your Contacts</h2>
<article  class="posts">
  <div class="post" v-for="post in Posts" :key="post.id"> <!-- Див для каждого поста в который приходят данные из файла CreatePost --> 
    <h3>Name : {{ post.Name }} </h3>
    <h3>Surname : {{ post.Surname }} </h3>
    <h3>Phone : {{ post.Phone }} </h3>
    <h3>Email : {{ post.Email }} </h3>
    <h3>Adress : {{ post.Adress }} </h3>
  </div>
</article>
</template>

<script>
  export default{
    props :{
      Posts : { 
        type : Array,
        required : true,
      }
    },
    
  }  
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.post {
  z-index: 1;
  width: 80%;
  margin-top: 20px;
  border: none;
  display: flex;
  padding: 10px 20px 10px 5%;
  flex-direction: column;
  border: 2px solid black;
  transition: 0.3s ease;
}

.post:hover{
  background-color: rgb(232, 232, 232);
  box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.445);
  transform: scale(1.05);
}
</style>