<template>
  <v-app>
    <v-main class="bg-white">
      <!-- Header Section -->
      <header class="py-5">
        <div class="container">
          <div class="mb-5 d-flex justify-content-between">
            <a href="https://tstu.uz/" target="_blank"
              ><img height="60" src="./../assets/logo.png" alt="logo"
            /></a>

            <a href="https://t.me/TSTU_Yoshlarittifoqi" target="_blank"
              ><img height="80" src="./../assets/yi.png" alt="yoshlar ittifogi"
            /></a>
          </div>
          <!-- Nominee Badge -->
          <div class="text-center mb-3">
            <span class="text-body-secondary small"
              >“Ijod – inson ruhining abadiy nuridir”</span
            >
          </div>

          <!-- Main Title -->
          <h1
            class="text-center display-3 fw-bolder mb-4 text-uppercase"
            style="font-size: 3.5rem; letter-spacing: -0.5px"
          >
            Maqsud Shayxzoda - ma'rifatparvar adib
          </h1>

          <!-- Profile Button -->
          <div class="text-center d-flex justify-content-center">
            <div class="d-flex align-items-center">
              <v-avatar
                class="mr-3"
                image="./../assets/msh-avatar2.png"
                size="50"
              ></v-avatar>
              <div>
                <p class="m-0 border-bottom py-1">
                  Shoir, dramaturg, adabiyotshunos va zabardast tarjimon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Content Sections -->
      <main class="container py-5">
        <div class="hero">
          <div>
            <p>“Adolat – shoirning ovozi, sevgi – uning qalami.”</p>
            <h1 class="text-uppercase">Maqsud Shayxzoda</h1>
            <p class="pr-5">
              O‘zbek adabiyotining buyuk vakili, shoir, dramaturg va tarjimon. U
              inson qalbining nozik tomonlarini aks ettirgan she’rlari, tarixiy
              pyesalari va dunyo adabiyotining durdonalarini o‘zbek tiliga
              tarjima qilishi bilan tanilgan. Shayxzoda o‘z ijodi orqali milliy
              madaniyatimizni boyitgan va xalqimiz qalbidan mustahkam joy olgan
              siymolardan biridir.
            </p>
            <v-btn variant="outlined">
              <a href="#biography" class="text-decoration-none text-light"
                >Tarjimai holi haqida batafsil</a
              >
            </v-btn>
          </div>
          <img
            width="400"
            class="rounded-5"
            src="./../assets/hero.jpg"
            alt="avatar"
          />
        </div>

        <section class="biography mt-5 w-75" id="biography">
          <h2 class="mb-3">Tarjimai holi</h2>
          <p class="text-left">
            Maqsud Shayxzoda 1908-yil 7-noyabrida Ozarbayjonning Oqtosh shahrida
            ziyoli oilada tavallud topdi. Uning otasi Ma’sumbek o‘z zamonasining
            taraqqiyparvar kishilaridan biri bo‘lib shifokorlik kasbidan
            tashqari, san’at, adabiyot, tarix va falsafa ilmlari bilan
            qiziqardi. Ularning oilasida shaharning eng ziyoli kishilari
            yig‘ilib, munozara va mubohasa qilishardi. Bu adabiy muhit uchun
            Pushkin va Lermontov, Shekspir va Balzak, Firdavsiy va Xayyom,
            Nizomiy va Navoiy asarlari begona emas edi. Shunday oilada tarbiya
            topayotgan bo‘lajak shoir boshlang‘ich va o‘rta ma’lumotni Oqtoshda
            olgach, Boku Oliy pedagogika institutida sirtdan o‘qidi.
          </p>
          <div class="text-center">
            <img
              src="./../assets/biography.png"
              alt="biography image"
              height="500"
              class="rounded-1 mb-1"
            />
            <p>
              <span>Maqsud Shayxzoda </span><br />
              <span class="opacity-50">© Biblioteka Xurshida Davrona</span>
            </p>
          </div>
        </section>
        <section class="activity mt-5 w-75" id="activity">
          <h2 class="mb-3">Faoliyati</h2>
          <p class="text-left">
            U 1925-yildan boshlab Ozarbayjon Maorif xalq komissarligi
            yo‘llanmasi bilan Dog‘istonning Darband shahrida muallimlik bilan
            shug‘ullandi. Shayxzoda Dog‘istonda kechgan qisqa hayoti davomida
            ham muallim, ham shoir, ham jurnalist, ham tanqidchi sifatida
            namoyon bo‘ldi. Shayxzoda 1928-yilda Toshkentga kelib, turli gazeta
            va jurnallar muharririyatlarida, 1935-1938 yillarda esa Fanlar
            Qo‘mitasi qoshidagi Til va adabiyot institutida ilmiy xodim,
            1938-yildan to umrining so‘ngiga qadar Nizomiy nomidagi Toshkent
            Davlat pedagogika institutining “O‘zbek mumtoz adabiyoti”
            kafedrasida dotsent vazifasida xizmat qilib, malakali kadrlar
            yetishtirdi.
          </p>

          <p class="text-left">
            Shayxzoda 1967-yil 19-fevral vafot etdi. U Toshkentning Farobiy
            qabristonida dafn etilgan. Ozarbayjon tuprog‘ida tug‘ilgan falakning
            gardishi bilan o‘zbek tuprog‘iga kelib qolib, zavq –shavq bilan ijod
            qilgan, zamonaviy o‘zbek adabiy tili va adabiyotiga salmoqli hissa
            qo‘shgan bu ulug‘ insonning muborak nomi hech qachon xalq nomidan
            o‘chmaydi. Zero uning o‘z yozganidek:
          </p>

          <p>
            <i
              >Umrlar bo‘ladiki, <br />
              Tirik odam o‘likdir,<br />
              Umrlar bo‘ladiki, <br />O‘lgan odam tirikdir.</i
            >
          </p>

          <div class="text-center">
            <img
              src="./../assets/activity.png"
              alt="biography image"
              height="500"
              class="rounded-1 mb-1"
            />
            <p>
              <span class="opacity-50">© Portal Ziyouz</span>
            </p>
          </div>
        </section>
        <section class="activity mt-5 w-75" id="creative-path">
          <h2 class="mb-3">Ijodiy yo‘li</h2>
          <p class="text-left">
            Shoirning adabiy faoliyati 1929-yildan boshlanib, “O‘n she’r”
            (1932), “Undoshlarim” (1933), “Uchinchi kitob” (1934), “Jumhuriyat”
            (1935) to‘plamlarining nashr etilishi adabiyotga o‘ziga xos ovozli
            shoir kirib kelayotganidan darak berdi.
          </p>

          <p class="text-left">
            Uning “Kurash nechun”, “Jang va qo‘shiq”, “Kapitan Gastello”,
            “Ko‘ngil deydiki...” she’riy to‘plamlari, “Jaloliddin Manguberdi”
            tarixiy dramasi kabi asarlari urush yillarida yozilgan bo‘lib,
            jangchilarning qaxramonligi, vatanga muhabbati, front ortidagi
            insonlarning sadoqatli mehnati tasvirlangan.
          </p>

          <p class="text-left">
            “O‘n besh yilning daftari”, “Olqishlarim”, “Zamon torlari”,
            “Shu’la”, “Chorak asr devoni” kabi she’riy to‘plamlarida, urushdan
            keyingi yillarda qatag‘on bo‘lgan shoir, totuvlik uchun kurash,
            Vatanga fidokorlikni kuyladi. 1958 yili adibning “Toshkentnoma”
            lirik dostoni yaratildi. Ushbu doston qadimiy va ayni chog‘da
            zamonaviy Toshkent shahriga bag‘ishlangan. Shayxzoda nafaqat lirik
            shoir, balki, iste’dodli dramaturg hamdir. 1960-yilda yozgan “Mirzo
            Ulug‘bek” tragediyasida buyuk o‘zbek olimi, munajjimi va
            ma’rifatparvar hukmdori obrazini yaratdi.
          </p>

          <p>
            1958 yili adibning “Toshkentnoma” lirik dostoni yaratildi. Ushbu
            doston qadimiy va ayni chog‘da zamonaviy Toshkent shahriga
            bag‘ishlangan. Shayxzoda nafaqat lirik shoir, balki, iste’dodli
            dramaturg hamdir. 1960-yilda yozgan “Mirzo Ulug‘bek” tragediyasida
            buyuk o‘zbek olimi, munajjimi va ma’rifatparvar hukmdori obrazini
            yaratdi.
          </p>
          <div class="text-center">
            <img
              src="./../assets/portrait1.png"
              alt="biography image"
              height="500"
              class="rounded-1 mb-1"
            />
            <p>
              <span class="opacity-50">© Portal Ziyouz</span>
            </p>
          </div>

          <p>
            Shayxzoda Pushkinning “Mis chavandoz”, Lermontovning “Kavkaz asiri”,
            Mayakovskiyning “Juda soz” dostonlari va ko‘plab she’rlarini,
            Shekspirning “Hamlet”, “Romeo va Julyetta” tragediyalari va
            sonetlarini, Nozim Xikmatning she’rlarini, ozarbayjon shoirlari
            asarlarini va o‘zbek tiliga o‘girdi.
          </p>

          <p>
            Shayxzodaning o‘zbek adabiyoti tarixi, o‘zbek xalq og‘zaki
            ijodiyoti, xususan, Alisher Navoiy ijodini tadqiq etish borasida
            yaratgan ilmiy ishlari ham tahsinga sazovordir. U filologiya fanlari
            nomzodi, dotsent ham edi. Shayxzoda asarlari dunyoning bir necha
            tillariga puxta o‘girilgan.
          </p>
        </section>
      </main>
    </v-main>

    <footer class="container mb-3">
      <hr />
      <div class="d-flex justify-content-between">
        <p class="opacity-75 fw-bold">
          <a
            class="text-dark text-decoration-none opacity-75 fw-bold"
            href="https://t.me/Behzod_00_12"
            target="_blank"
            >© Behzod Eshpo'latov</a
          >
        </p>

        <ul class="list-unstyled d-flex justify-content-center m-0 p-0">
          <li link class="m-0 p-0 ms-3 cursor-pointer footer-nav-item">
            <a href="#biography" class="text-decoration-none text-dark"
              >Tarjimai holi</a
            >
          </li>
          <li link class="m-0 p-0 ms-3 cursor-pointer footer-nav-item">
            <a href="#activity" class="text-decoration-none text-dark"
              >Faoliyati</a
            >
          </li>
          <li link class="m-0 p-0 ms-3 cursor-pointer footer-nav-item">
            <a href="#creative-path" class="text-decoration-none text-dark"
              >Ijodiy yo‘li</a
            >
          </li>
        </ul>
      </div>
    </footer>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const experiences = ref([
  {
    year: "2023 - Present",
    role: "Senior Developer",
    company: "Tech Solutions Inc.",
    color: "primary",
  },
  {
    year: "2020 - 2023",
    role: "Web Developer",
    company: "Digital Agency",
    color: "grey",
  },
  {
    year: "2018 - 2020",
    role: "Junior Developer",
    company: "Startup Hub",
    color: "grey",
  },
]);
</script>

<style>
/* Custom styles */
.v-application {
  font-family: "Inter", sans-serif !important;
}

.display-3 {
  font-family: "Inter", sans-serif !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .display-3 {
    font-size: 2rem !important;
  }
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, #141e30, #243b55);
  color: white;
  border-radius: 30px;
  padding: 20px 30px;
  min-height: 60vh;
}

#biography,
#activity,
#creative-path {
  scroll-margin-top: 80px;
}

.footer-nav-item {
  /* padding: 5px 0; */
  transition: box-shadow 0.3s ease, color 0.3s ease;
  display: inline-block;
  position: relative;
}

.footer-nav-item:hover {
  box-shadow: inset 0 -2px 0 rgba(0, 123, 255, 1);
  color: #007bff;
}
</style>
