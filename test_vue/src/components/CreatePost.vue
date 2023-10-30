<template>
    <div class="container">
      <div class="wrap" v-click-outside="closePopup">
        <span class="header">
          <h4 class="tutle">Add Info</h4>
        </span>
        <form class="create">
          <!-- Инпуты отвечающие за заполнение данных связанные с объектом --> 
          <div class="InputDiv">
            <input v-model="post.Name" type="text input" class="input" placeholder="Name">
          </div>

          <div class="InputDiv">
            <input v-model="post.Surname" class="input" type="text" placeholder="Surname">
          </div>

          <div class="InputDiv">
            <input v-model="post.Phone" class="input" type="text" placeholder="Phone">
          </div>

          <div class="InputDiv">
            <input v-model="post.Email" class="input" type="text" placeholder="Email">
          </div>

          <div class="InputDiv">
            <input v-model="post.Adress" class="input" type="text" placeholder="Adress">
          </div>

        </form>
        <nav class="Nav">
          <button class="Closebtn" @click="closePopup">Close</button>
          <button button class="btn" @click="CreateForm">Submit</button>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  import vClickOutside from 'v-click-outside';
  
  export default {
    props: {
      isPopupOpen: { // переданный пропс для открытия поп апа
        type: Boolean,
        required: true
      },
    },
    directives: {
        vClickOutside
    },
    data() {
      return {// пустой объект для передачи данных через инпуты
        post: {
          Name: '',
          Surname: '',
          Phone: '',
          Email: '',
          Adress: '',
        }
      }
    },
    methods: { 
      CreateForm(e) { // Метод для создания поста путем нажатия на кнопку 
        e.preventDefault();
        this.post.id = Date.now();
        this.$emit('CreatePost', this.post); // передача данных поста
        this.post = {
          Name: '',
          Surname: '',
          Phone: '',
          Email: '',
          Adress: '',
        }
        this.closePopup()
      },
      closePopup() {
        this.$emit('close')
      },
      openPopup() {
        this.$emit('open')
      }
    }
  }
  </script>
  
  <style>
  .popup {
    width: 500px;
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 900px 900px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    z-index: 100;
  }
  
  .tutle{
    text-align: center;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }
  
  .create{
    margin-top: 10px;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 15px;
  }

.InputDiv{
  flex-basis: calc(50% - 10px);
    margin-bottom: 10px;
}

@media (max-width: 767px) {
    .inputItem{
        display: flex;
        align-items: center;
        justify-content: center;
      flex-basis: 100%;
    }
}

  /* Дополнительные стили для улучшения внешнего вида инпутов */
input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
  }
  
input[type="submit"]:hover {
    background-color: #45a049;
  }
  
input[type="text"]:focus {
    outline: none;
    border-color: #5e9ed6;
    box-shadow: 0 0 5px #5e9ed6;
  }
  
  .Nav{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 15px;
  }

  .btn {
    width: 43% ;
    height: 40px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 23px;
  }
  
  .Closebtn {
    width: 43% ;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>