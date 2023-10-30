<template>
    <div class="container" style="width: 100%;">
      <div class="wrap" v-click-outside="closePopup">
        <form id="create" @focus="openPopup">
          <span class="header">
            <h4 class="tutle">Add Info</h4>
          </span>
  
          <input v-model="post.Name" type="text" class="input" placeholder="Name">
          <input v-model="post.Surname" class="input" type="text" placeholder="Surname">
          <input v-model="post.Phone" class="input" type="text" placeholder="Phone">
          <input v-model="post.Email" class="input" type="text" placeholder="Email">
          <input v-model="post.Adress" class="input" type="text" placeholder="Adress">
  
          <button class="btn" @click="CreateForm">Submit</button>
          <button class="Closebtn" @click="closePopup">Close</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import vClickOutside from 'v-click-outside';
  
  export default {
    props: {
      isPopupOpen: {
        type: Boolean,
        required: true
      },
    },
    directives: {
        vClickOutside
    },
    data() {
      return {
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
      CreateForm(e) {
        e.preventDefault();
        this.post.id = Date.now();
        this.$emit('CreatePost', this.post);
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
  
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
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
  
  form {
    display: flex;
    flex-direction: column;
  }
  

  
  .btn {
    width: 40%;
    height: 40px;
    margin-top: 10px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .Closebtn {
    width: 40%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -40px;
  }
  </style>