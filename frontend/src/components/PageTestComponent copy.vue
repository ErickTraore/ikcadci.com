<template>
    <div id="app">
      <div class="container">
          <h1 class="text-center">Vue.js Tabs</h1>
      <div class="row">
          <div class="col-md-12 internalPadding">
            <div class="blueBar" @click="isShow['Star'] = !isShow['Star']" :class="{'red': isShow['Star']}">
              <div class="d-flex">
                <h2><i class="fab fa-jedi-order"></i>&nbsp; &nbsp;Star Wars </h2>
                <div class="ml-auto">
                  <i class="fas fa-plus ml-auto"></i>
                </div>
              </div>
            </div><!-- End BlueBar -->
          </div><!-- End col -->
        </div><!-- End Row -->
        <transition name="slide">
          <div class="row content internalPadding" v-if="isShow['Star']">
            <div class="col-12">
            <h2><i class="fab fa-jedi-order"></i>&nbsp; &nbsp;Star Wars</h2>
    <p>Star Wars is an American epic space-opera media franchise created by George Lucas. The franchise began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. The original film, later subtitled Episode IV – A New Hope, was followed by the sequels Episode V – The Empire Strikes Back (1980) and Episode VI – Return of the Jedi (1983), forming what is collectively referred to as the original trilogy. A prequel trilogy was later released, consisting of Episode I – The Phantom Menace (1999), Episode II – Attack of the Clones (2002) and Episode III – Revenge of the Sith (2005). Years later, a sequel trilogy began with Episode VII – The Force Awakens (2015), continued with Episode VIII – The Last Jedi (2017), and will conclude with Episode IX – The Rise of Skywalker (2019).[1] The first eight films were nominated for Academy Awards (with wins going to the first two released) and were commercially successful. Together with the theatrical anthology films Rogue One (2016) and Solo: A Star Wars Story (2018), the combined box office revenue of the films equates to over US$9 billion,[2] and is currently the second-highest-grossing film franchise.[3]</p>
            </div><!-- End Col -->
            <div class="col-md-12 internalPadding" style="margin-top: 15px;">
              <div @click="isShow['Star'] = !isShow['Star']">
                <div class="d-flex">
                <button class="ml-auto">
                  <slot>Hide</slot>
                </button>
              </div>
            </div>
            </div><!-- End Col -->
          </div><!-- End Row -->
        </transition>
        <div class="row">
          <div class="col-md-12 internalPadding">
            <div class="blueBar" @click="isShow['Diehard'] = !isShow['Diehard']" :class="{'red': isShow['Diehard']}">
              <div class="d-flex">
                <h2><i class="fas fa-sleigh"></i>&nbsp; &nbsp;Die Hard </h2>
                <div class="ml-auto">
                  <i class="fas fa-plus ml-auto"></i>
                </div>
              </div>
            </div><!-- End BlueBar -->
          </div><!-- End col -->
        </div><!-- End Row -->
        <transition name="slide">
          <div class="row content internalPadding" v-if="isShow['Diehard']">
            <div class="col-12">
            <h2><i class="fas fa-sleigh"></i>&nbsp; &nbsp;Die Hard</h2>
      <p>Die Hard is a 1988 American action thriller film[2] directed by John McTiernan and written by Steven E. de Souza and Jeb Stuart, based on Roderick Thorp's 1979 novel Nothing Lasts Forever. It was produced by the Gordon Company and Silver Pictures, and distributed by 20th Century Fox. The film follows off-duty New York City Police Department officer John McClane (Bruce Willis) who is caught in a Los Angeles skyscraper during a heist led by Hans Gruber (Alan Rickman).</p>

    <p>Made for $28 million, Die Hard grossed over $140 million theatrically worldwide, with the film turning Willis into an action star, and became a metonym for an action film in which a lone hero fights overwhelming odds. The film's success created the Die Hard franchise, which includes four sequels, a number of video games, and a comic book, and later in 2017 was selected for preservation in the United States National Film Registry. Die Hard has been named one of the best action and Christmas-themed films ever made.[3][4][5] The film also ranks No. 20 on Empire's 2017 list of the 100 greatest movies of all time.[6]</p>
            </div><!-- End Col -->
            <div class="col-md-12 internalPadding" style="margin-top: 15px;">
              <div @click="isShow['Diehard'] = !isShow['Diehard']">
                <div class="d-flex">
                <button class="ml-auto">
                  <slot>Hide</slot>
                </button>
              </div>
            </div>
            </div><!-- End Col -->
          </div><!-- End Row -->
        </transition>
        
            <div class="row">
          <div class="col-md-12 internalPadding">
            <div class="blueBar" @click="isShow['Predator'] = !isShow['Predator']" :class="{'red': isShow['Diehard']}">
              <div class="d-flex">
                <h2><i class="fab fa-reddit-alien"></i>&nbsp; &nbsp;The Predator </h2>
                <div class="ml-auto">
                  <i class="fas fa-plus ml-auto"></i>
                </div>
              </div>
            </div><!-- End BlueBar -->
          </div><!-- End col -->
        </div><!-- End Row -->
        <transition name="slide">
          <div class="row content internalPadding" v-if="isShow['Predator']">
            <div class="col-12">
            <h2><i class="fab fa-reddit-alien"></i>&nbsp; &nbsp;The Predator</h2>
      <p>The Predator is a 2018 American science fiction action film directed by Shane Black and written by Black and Fred Dekker. It is the fourth installment in the Predator film series, following Predator (1987), Predator 2 (1990), and Predators (2010), and makes reference to the events of the crossover films Alien vs. Predator (2004) and Aliens vs. Predator: Requiem (2007). Black had a supporting role in the original film, while John Davis returns as producer from the first three installments. The film stars Boyd Holbrook, Trevante Rhodes, Jacob Tremblay, Keegan-Michael Key, Olivia Munn, Thomas Jane, Alfie Allen, and Sterling K. Brown and follows a group of PTSD-afflicted soldiers who must fight off an invading pair of Predators.</p>

    <p>Talks of a new Predator installment began in June 2014, with Black being confirmed as writer and director; much of the cast signed on between October 2016 and January 2017. Filming took place in British Columbia from February to June 2017, with the entire climax being re-written and re-shot in July 2018 following poor test screenings.</p>

    <p>The Predator premiered at the Toronto International Film Festival on September 6, 2018, and was theatrically released in the United States on September 14, 2018, by 20th Century Fox, in IMAX and Dolby Cinema, as well as standard formats.[4] The film grossed $160 million worldwide.</p>
            </div><!-- End Col -->
            <div class="col-md-12 internalPadding" style="margin-top: 15px;">
              <div @click="isShow['Predator'] = !isShow['Predator']">
                <div class="d-flex">
                <button class="ml-auto">
                  <slot>Hide</slot>
                </button>
              </div>
            </div>
            </div><!-- End Col -->
          </div><!-- End Row -->
        </transition>
      </div><!-- End Container -->
</div><!-- End App -->
</template>
<script>
export default{
    name: 'PageTest',
    data() {
        return{
      title: "Hello",
      isShow: {
        'Star': false,
        'Diehard': false,
        'Predator': false,
         }
      }
    }
}
</script>
<style>
    $body-color: #818181;
    $border: #DDDDDD;
    $yellow: #FFB715;
    $white: #ffffff;
    $purple: #800080;
    $nav-bg: #F5F7FA;
    $white: #ffffff;
    $background-image-linear-blue: linear-gradient(to bottom, #016BA8, #569BCA, #9FC5E8);
    $orange: #FFB715;
    $blue:#016BA8;
    $muted:#707070;
    $border: #DDDDDD;
    $purple: linear-gradient(180deg, rgba(226,48,219,1) 7%, rgba(193,53,163,1) 41%, rgba(119,21,128,1) 94%);

body{
  background: $purple;
  height: 100vh;
}

.seperator {
        margin-top: 25px;
        border-top: 1px solid $nav-bg;
        padding-top: 25px;
    }

.blueBar {
    background: $nav-bg;
    color: $muted;
    padding: 15px 20px;
    margin-top: 15px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
    border-radius: 50px;
    &:hover {
      opacity: 0.8;
        cursor: pointer;
        transition: all 1s;
        h5 {
            color: $white;
        }
    }

    h2 {
        text-transform: uppercase;
        margin: 0;
        color: $muted;
        font-size: 16px;
    }
    .fa-bars {
        transform: rotate(90deg);
    }
}

.red {
    .fa-chevron-down,
    .fa-plus {
        animation: rotate-in 0.5s forwards;
    }
    @keyframes rotate-in {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(45deg);
        }
    }
}

.slide-enter-active {
    -moz-transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}

.slide-leave-active {
    -moz-transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
    max-height: 100px;
    overflow: hidden;
}

.slide-enter,
.slide-leave-to {
    overflow: hidden;
    max-height: 0;
}

.content{
  margin-top: 20px;
  background: none;
  color: $white;
}

.internalPadding {
    padding: 0 25px;
}

button{
  background: #nag-bg;
  color: $muted;
  border: none;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding:5px 15px;
  box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.35);
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  transition: all 1s;
  &:hover{
    background: $yellow;
    box-shadow: none;
    cursor: pointer;
  }&:focus{
    outline: none;
  }
}

.tab-container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}

 h1 {
        text-transform: uppercase;
        margin: 0;
        color: $nav-bg;
        font-size: 48px;
        letter-spacing: 25px;
        margin-bottom: 1rem;
        font-weight: light;
        
    }
</style>