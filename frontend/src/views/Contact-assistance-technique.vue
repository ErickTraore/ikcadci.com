<template>
<div class="container">
  <h2>Formulaire de contact </h2>
  <h1>assistance-technique</h1>
  <form action="/action_page.php">
    <label for="fname">Nom & prénom</label>
    <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom">

    <label for="sujet">Sujet</label>
    <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message">

    <label for="emailAddress">Email</label>
    <input id="emailAddress" type="email" name="email" placeholder="Votre email">

    <label for="subject">Message</label>
    <textarea id="subject" name="subject" placeholder="Votre message" style="height:200px"></textarea>

    <input type="submit" value="Envoyer">
  </form>
</div>

</template>
<script>
 export default {
    name: 'contact',
    computed: {},
     data() {
      return {}
    }
 }
</script>
<style>

body {font-family: Arial, Helvetica, sans-serif;
  padding: 0px;}

input[type=text], textarea, input[type=email] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  margin-right: 0px;
  margin-left: 0px;
  resize: vertical;
}
label{margin-right: 0px;
  margin-left: 0px;
  width: 100%;}

input[type=submit] {
  background-color: #1255a2;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #1872D9;
}

.container {
  /* Ajouter box-sizing */
  box-sizing : border-box;
  border-radius:5px;
  background-color:#f2f2f2;
  padding:20px;
  width: 100%;
  /* redéfinition 400 + 2*20 */
  max-width: 440px;
  margin:0 auto;
}
h1  {
  color: #ffc800;
  width: 100%;
}
</style>